<?

namespace App\Services;

use Adldap\Laravel\Facades\Adldap;
use App\Http\Controllers\MessagesController;
use App\Models\Configuracoes;
use App\Models\User;
use App\Repositories\UserRepository;
use App\Validators\UserValidator;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Prettus\Validator\Contracts\ValidatorInterface;

class UserService
{

    private $repository;
    private $validator;
    private $exceptionMessagesController;

    public function __construct(
        UserRepository      $repository,
        UserValidator       $validator,
        MessagesController  $exceptionMessagesController
    ) {
        $this->repository                   = $repository;
        $this->validator                    = $validator;
        $this->exceptionMessagesController  = $exceptionMessagesController;
    }


    public function all()
    {
        return $this->repository->all();
    }

    public function isAdmin()
    {
        $user = new User();
        $user->permissao = Auth::user()->permissao;
        return $user->isAdmin();
    }

    public function show(User $usuario)
    {
        $us = $this->repository->find($usuario->id);
        return $us;
    }

    public function store($request)
    {
        try {
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);


            if ($vld) {
                $usuario = new User();
                $usuario->name = $request->input('name');
                $usuario->email = $request->input('email');
                $usuario->password = 'not set';
                $usuario->permissao = User::PERMISSAO_USUARIO;
                $usuario->save();

                return User::all();
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function update(Request $request, User $usuario)
    {
        try {
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            if ($vld) {
                //$usuario->nome = $request->input('nome');
                //$usuario->email = $request->input('email');
                $usuario->permissao = $request->input('permissao');
                $usuario->save();

                return $usuario;
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function destroy(User $usuario)
    {
        try {
            if ($usuario->delete()) {
                return new User();
            } else {
                abort(404, 'Usuário não encontrado');
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function usuarioEmail($uid)
    {
        $usuario = $this->repository->find($uid);
        $email = "";
        if ($usuario) {
            try {
                $usuarioLdap = Adldap::search()->users()->find($usuario->email);
                if ($usuarioLdap != NULL && isset($usuarioLdap->getAttributes()["mail"]))
                    $email = strtolower($usuarioLdap->getAttributes()["mail"][0]);
            } catch (Exception $e) {
                return $this->exceptionMessagesController->exceptionMessages($e);
            }
        }

        return $email;
    }

    public function getInfosLdapServidorByDescription($cpf, $createUser = false)
    {
        $STRING_BAN = "Aluno";
        if (strlen($cpf) != 11 && strlen($cpf) != 14)
            return null;
        if (strlen($cpf) == 11)
            $cpf = substr($cpf, 0, 3) . "." . substr($cpf, 3, 3) . "." . substr($cpf, 6, 3) . "-" . substr($cpf, 9, 2);
        $us = Adldap::search()->where('description', '=', $cpf)->get();
        $u = null;
        if (count($us)) {
            if (count($us) > 1) {
                for ($i = 0; $i < count($us); $i++) {
                    $brk = true;
                    $listas = [];
                    if (!isset($us[$i]->getAttributes()["memberof"]))
                        $brk = false;
                    else
                        $listas = $us[$i]->getAttributes()["memberof"];
                    foreach ($listas as $l) {
                        if (is_int(strpos($l, $STRING_BAN))) {
                            $brk = false;
                            break;
                        }
                    }
                    if ($brk) {
                        $u = $us[$i];
                        break;
                    }
                }
            } else
                $u = $us[0];

            if (!$u)
                return null;
            $usuarioLDAP = [
                'userId' => 0,
                'email' => $u->getAttributes()["mail"][0],
                'username' => $u->getAttributes()["samaccountname"][0],
                'nome' => $u->getAttributes()["displayname"][0],
            ];
            if ($createUser) {
                $usuario = $this->repository->findWhere(['email' => $usuarioLDAP['username']])->first();
                if ($usuario)
                    $usuarioLDAP['userId'] = $usuario->id;
                else {
                    $usuario = new User();
                    $usuario->name = $usuarioLDAP['nome'];
                    $usuario->email = $usuarioLDAP['username'];
                    $usuario->password = 'not set';
                    $usuario->permissao = User::PERMISSAO_USUARIO;
                    $usuario->save();
                    $usuarioLDAP['userId'] = $usuario->id;
                }
            }
            return $usuarioLDAP;
        }
        return null;
    }

    public function crivoUsuariosAutorizados($sala) {
        $regexLiberados = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_REGEX_EMAILS_LIBERADOS)->first();
        $pattern = "/".$regexLiberados->valor."/i";
        return preg_match($pattern, $sala->email);
    }
}
