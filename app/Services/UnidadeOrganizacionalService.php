<?

namespace App\Services;

use Adldap\Laravel\Facades\Adldap;
use Adldap\Models\Attributes\AccountControl;
use App\Http\Controllers\MessagesController;
use App\Models\Configuracoes;
use App\Models\UnidadeOrganizacional;
use App\Repositories\ConfiguracoesRepository;
use App\Repositories\UnidadeOrganizacionalRepository;
use App\Validators\UnidadeOrganizacionalValidator;
use Exception;
use Illuminate\Http\Request;
use Prettus\Validator\Contracts\ValidatorInterface;

class UnidadeOrganizacionalService
{

    private $repository;
    private $validator;
    private $exceptionMessagesController;
    private $configuracoesRepository;

    public function __construct(
        UnidadeOrganizacionalRepository      $repository,
        UnidadeOrganizacionalValidator       $validator,
        MessagesController  $exceptionMessagesController,
        ConfiguracoesRepository $configuracoesRepository
    ) {
        $this->repository                   = $repository;
        $this->validator                    = $validator;
        $this->exceptionMessagesController  = $exceptionMessagesController;
        $this->configuracoesRepository      = $configuracoesRepository;
    }

    public function all()
    {
        return $this->repository->all();
    }


    public function getOuDirRoot($request)
    {
        $ouRootBase = $this->configuracoesRepository->findWhere(['nome' => Configuracoes::CONFIGURACAO_OU_ROOT_DIR])->first();
        return $ouRootBase->valor;
    }

    public function setOuDirRoot($request)
    {
        $ouRoot = $request->has('ou-dir-root') ? $request->input('ou-dir-root') : null;
        if (!$ouRoot)
            abort(403, "Erro de validação! Parâmetros inválidos!");
        $ouRootBase = $this->configuracoesRepository->findWhere(['nome' => Configuracoes::CONFIGURACAO_OU_ROOT_DIR])->first();
        $ouRootBase->valor = $ouRoot;
        $ouRootBase->save();
        return $ouRootBase->valor;
    }

    public function getLdapUser(Request $request, $username)
    {
        //$usuarioLdap = Adldap::search()->users()->find($username);
        $usuarioLdap = @Adldap::search()->where('samaccountname', '=', $username)->get()[0];
        if (!$usuarioLdap)
            return false;
        return $usuarioLdap;
    }

    public function getLdapUserByEmail(Request $request, $email)
    {
        $usuarioLdap = @Adldap::search()->where('mail', '=', $email)->get()[0];
        if (!$usuarioLdap)
            return false;
        return $usuarioLdap;
    }

    private function isCPF($value)
    {
        if (strlen($value) !== 11 || preg_match('/(\d)\1{10}/', $value)) {
            return false;
        }

        for ($t = 9; $t < 11; $t++) {
            for ($d = 0, $c = 0; $c < $t; $c++) {
                $d += $value[$c] * (($t + 1) - $c);
            }

            $d = ((10 * $d) % 11) % 10;

            if ($value[$c] != $d) {
                return false;
            }
        }

        return true;
    }

    private function tratarNome($nome)
    {
        $saida = "";

        $nome = mb_strtolower($nome, 'UTF-8'); // Converter o nome todo para minúsculo
        $nome = explode(" ", $nome); // Separa o nome por espaços

        for ($i = 0; $i < count($nome); $i++) {
            $array_de_tratamento = ["da", "e", "da", "dos", "do", "das"];
            if (in_array($nome[$i], $array_de_tratamento)) {
                $saida .= $nome[$i] . ' '; // Se a palavra estiver dentro das complementares mostrar toda em minúsculo
            } else {
                $saida .=  mb_convert_case($nome[$i], MB_CASE_TITLE, "UTF-8") . ' '; // Se for um nome, mostrar a primeira letra maiúscula
            }
        }
        return trim($saida);
    }

    private function quebraNome($nome)
    {
        for ($i = 0; $i < strlen($nome); $i++)
            if ($nome[$i] == ' ')
                return [substr($nome, 0, $i), substr($nome, $i + 1)];
        return [$nome, ""];
    }

    private function tirarAcentos($string)
    {
        return preg_replace(array("/(á|à|ã|â|ä)/", "/(Á|À|Ã|Â|Ä)/", "/(é|è|ê|ë)/", "/(É|È|Ê|Ë)/", "/(í|ì|î|ï)/", "/(Í|Ì|Î|Ï)/", "/(ó|ò|õ|ô|ö)/", "/(Ó|Ò|Õ|Ô|Ö)/", "/(ú|ù|û|ü)/", "/(Ú|Ù|Û|Ü)/", "/(ñ)/", "/(Ñ)/", "/(ç)/", "/(Ç)/"), explode(" ", "a A e E i I o O u U n N c C"), $string);
    }

    private function geraEmail($nome, $cpf, $sufixo)
    {
        $nome = str_replace("'", "", $nome);
        $fname = "";
        $lname = "";
        for ($i = 0; $i < strlen($nome); $i++)
            if ($nome[$i] == ' ') {
                $fname = mb_strtolower(substr($nome, 0, $i), 'UTF-8');
                break;
            }
        for ($i = strlen($nome) - 1; $i >= 0; $i--)
            if ($nome[$i] == ' ') {
                $lname = mb_strtolower(substr($nome, $i + 1, strlen($nome)), 'UTF-8');
                break;
            }
        return $this->tirarAcentos($fname) . '.' . $this->tirarAcentos($lname) . substr($cpf, 0, 3) . $sufixo;
    }

    /**
     * $user array [0]: username, [1]: email, [2]: nome, [3]?: senha
     * 
     */
    private function gerarAdUser($user, $company, $department, $userprincipalnameSufixo)
    {

        $nomeTratado = $user[2]; //$this->tratarNome($user[2]);
        $nomeQuebrado = $this->quebraNome($nomeTratado);
        $adUser = [
            'cn' => $nomeTratado,
            'instancetype' => 4,
            'samaccountname' => $user[0],
            'objectclass' => [
                'top', 'person', 'organizationalPerson', 'user'
            ],
            'displayname' => $nomeTratado,
            'name' => $nomeTratado,
            'givenname' => $nomeQuebrado[0],
            'sn' => $nomeQuebrado[1],
            'company' => $company,
            'department' => $department,
            'description' => substr($user[0], 0, 3) . "." . substr($user[0], 3, 3) . "." . substr($user[0], 6, 3) . "-" . substr($user[0], 9, 2),
            'mail' => $user[1],
            'userprincipalname' => $user[0] . "@" . $userprincipalnameSufixo
        ];
        return $adUser;
    }

    public function alterarSenha(Request $request)
    {
        $estudantes = $request->has('estudantes') ? json_decode($request->input('estudantes')) : null;
        $senhaPadrao = $request->has('senhaPadrao') ? $request->input('senhaPadrao') : null;

        if (!$estudantes)
            abort(403, "Erro de validação! Parâmetros inválidos!");

        $ret = "<h4><b>Alteração de Senha de Usuários no AD</b></h4><br>";

        $ret .= "<br><br><b>Senha Padrão:</b><br>" . ($senhaPadrao ? '"' . $senhaPadrao . '"' : "<i>sem senha padrão</i>") . "<br>";

        $ret .= "<br><b>Iniciando processo...</b><br><br>";

        $ret .= '<table class="tabela-relatorio"><thead><tr>'
            . '<th>Username</th>'
            . '<th>Nome</th>'
            . '<th>Nova Senha</th>'
            . '<th>Processamento</th>'
            . '</tr></thead><tbody>';
        foreach ($estudantes as $e) {
            try {
                $user = $this->getLdapUser($request, $e[0]);
                if (!$user) {
                    $ret .= "<tr><td>" . $e[0] . '</td><td></td><td>' . ($e[3] ? '"' . $e[3] . '"</td><td>'  : '<i>senha padrão</i></td><td>') . '<span style="color: #e9d700;">Usuário não encontrado</span>';
                    continue;
                }

                $nomeUser = $user->getAttributes()['name'][0];
                $ret .= "<tr><td>" . $e[0] . '</td><td>' . $nomeUser . "</td><td>" . ($e[3] ? '"' . $e[3] . '"</td><td>'  : '<i>senha padrão</i></td><td>');

                if (!$senhaPadrao && !$e[3]) {
                    $ret .= '<span style="color: #e9d700;">Ausência de senha</span>';
                    continue;
                }

                $user->setPassword($e[3] ? $e[3] : $senhaPadrao);

                $user->save();

                $ret .= "<span style=\"color: #1bb300;\">Senha alterada!</span>";
            } catch (Exception $ex) {
                $ret .= '<span style="color: #ff0000;"> Erro: ' . $ex->getMessage() . ' </span>';
            }
            $ret .= "</td></tr>";
        }
        $ret .= "</tbody></table>";

        $ret .= "<br><br><b>Criação de usuários no AD Finalizada!</b>";

        return $ret;
    }

    public function substituiEmailsPorPadrao(Request $request)
    {

        $sufixo = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_AD_EMAIL_PADRAO_SUFIXO)->first()->valor;

        $estudantes = $request->has('estudantes') ? json_decode($request->input('estudantes')) : null;
        if (!$estudantes)
            abort(403, "Erro de validação! Parâmetros inválidos!");
        $estRet = [];
        foreach ($estudantes as $e) {
            $estRet[] = (object) [
                'username' => $e[0],
                'fullname' => $e[2],
                'email' => ($this->isCPF($e[0]) ? $this->geraEmail($e[2], $e[0], "@" . $sufixo) : $e[1]),
                'senha' => $e[3],
                'is_professor' => false
            ];
        }
        return $estRet;
    }

    public function getOusFilhas()
    {
        $ouRootBase = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_OU_ROOT_DIR)->first();
        $us = Adldap::search()->ous()->in($ouRootBase->valor)->get();
        $ous = [];
        foreach ($us as $uu) {
            $ous[] = $uu->getAttributes()['distinguishedname'][0];
        }
        return $ous;
    }

    public function criarContasAD(Request $request)
    {
        $ouCadastro = $request->has('ouCadastro') ? $request->input('ouCadastro') : null;
        $ousIds = $request->has('ous') ? $request->input('ous') : null;
        $estudantes = $request->has('estudantes') ? json_decode($request->input('estudantes')) : null;
        $senhaPadrao = $request->has('senhaPadrao') ? $request->input('senhaPadrao') : null;

        $company = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_AD_COMPANY)->first()->valor;
        $department = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_AD_DEPARTMENT)->first()->valor;
        $userprincipalnameSufixo = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_AD_USER_PRINCIPAL_NAME_SUFIXO)->first()->valor;

        if (!$ouCadastro || !$ousIds || !$estudantes)
            abort(403, "Erro de validação! Parâmetros inválidos!");

        $ous = UnidadeOrganizacional::whereIn('id', $ousIds)->get();

        $ret = "<h4><b>Criação de Usuários no AD</b></h4><br>";

        $ret .= "<br><b>Diretório de Criação:</b><br>" . $ouCadastro . "<br>";

        $ret .= "<br><b>Grupos selecionados (Membro de):</b>";
        $memberof = [];
        foreach ($ous as $ou) {
            $ret .= "<br>" . $ou->nome;
            $memberof[] = $ou->valor;
        }
        $ret .= "<br><br><b>Senha Padrão:</b><br>" . ($senhaPadrao ? '"' . $senhaPadrao . '"' : "<i>sem senha padrão</i>") . "<br>";

        $ret .= "<br><b>Iniciando processo de criação de usuários no AD...</b><br><br>";

        $ret .= '<table class="tabela-relatorio"><thead><tr>'
            . '<th>Username</th>'
            . '<th>Nome</th>'
            . '<th>Senha</th>'
            . '<th>Processamento</th>'
            . '</tr></thead><tbody>';
        foreach ($estudantes as $e) {
            $e[2] = $this->tratarNome($e[2]);
            $ret .= "<tr><td>" . $e[0] . '</td><td>' . $e[2] . "</td><td>" . ($e[3] ? '"' . $e[3] . '"</td><td>'  : '<i>senha padrão</i></td><td>');
            if (!$this->isCPF($e[0])) {
                $ret .= '<span style="color: #e9d700;">CPF Inválido para username </span>';
                continue;
            }
            if (!$senhaPadrao && !$e[3]) {
                $ret .= '<span style="color: #e9d700;">Ausência de senha</span>';
                continue;
            }
            if ($ldapuser = $this->getLdapUser($request, $e[0])) {
                $distinguishedname = @$ldapuser->getAttributes()['distinguishedname'][0];
                $ret .= '<span style="color: #e9d700;" title="' . $distinguishedname . '">
                ' . (stripos($distinguishedname, $ouCadastro) !== FALSE ? 'Cadastrado anteriormente' : 'Usuário já existente (*)') . '
                </span>';
                continue;
            }
            if ($ldapuser = $this->getLdapUserByEmail($request, $e[1])) {
                $distinguishedname = @$ldapuser->getAttributes()['distinguishedname'][0];
                $ret .= '<span style="color: #e9d700;" title="' . $distinguishedname . '">Email já utilizado (*)</span>';
                continue;
            }
            try {
                $adUserAbstr = $this->gerarAdUser($e, $company, $department, $userprincipalnameSufixo);

                $user = Adldap::make()->user(
                    $adUserAbstr
                );
                $user->setDn("CN=" . $e[2] . "," . $ouCadastro);

                $user->setPassword($e[3] ? $e[3] : $senhaPadrao);

                $user->save();

                foreach ($memberof as $grupo)
                    $user->addGroup($grupo);

                $user->setUserAccountControl(AccountControl::NORMAL_ACCOUNT + AccountControl::DONT_EXPIRE_PASSWORD);
                $user->save();

                $ret .= "<span style=\"color: #1bb300;\">Usuário criado!</span>";
            } catch (Exception $ex) {
                $ret .= '<span style="color: #ff0000;"> Erro: ' . $ex->getMessage() . ' </span>';
            }
            $ret .= "</td></tr>";
        }
        $ret .= "</tbody></table>";
        $ret .= "<br>*: passe o mouse sobre o item para ver mais detalhes";

        $ret .= "<br><br><b>Criação de usuários no AD Finalizada!</b>";

        return $ret;
    }

    public function store(Request $request)
    {
        try {
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            if ($vld) {
                $ou = new UnidadeOrganizacional();
                $ou->nome = $request->input('nome');
                $ou->valor = $request->input('valor');
                $ou->save();
                return $ou;
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function show($id)
    {
        return $this->repository->find($id);
    }

    public function update(Request $request, $id)
    {
        try {
            $ou = $this->repository->find($id);
            if (!$ou)
                abort(404, 'Unidade Organizacional não encontrada');
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            if ($vld) {
                $ou->nome = $request->input('nome');
                $ou->valor = $request->input('valor');
                $ou->save();
                return $ou;
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function destroy($id)
    {
        $ou = $this->repository->find($id);
        if (!$ou)
            abort(404, 'Unidade Organizacional não encontrada');
        try {
            $ou->delete();
            return new UnidadeOrganizacional();
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }
}
