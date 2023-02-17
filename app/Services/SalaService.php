<?

namespace App\Services;

use App\Http\Controllers\MessagesController;
use App\Mail\SendMailUser;
use App\Models\Configuracoes;
use App\Models\Sala;
use App\Models\Status;
use App\Models\User;
use App\Repositories\ConfiguracoesRepository;
use App\Repositories\PeriodoLetivoRepository;
use App\Repositories\SalaRepository;
use App\Repositories\StatusRepository;
use App\Repositories\UserRepository;
use App\Validators\SalaValidator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Prettus\Validator\Contracts\ValidatorInterface;

class SalaService
{

    const ARQUIVO_SCRIPT_RESTAURACAO_AUTOMATICA = "auto-restore.php";
    const SUFIXO_URL_SALAID = "course/view.php?id=";
    const STRING_BUSCA_INIC_SALAID = "Curso Criado: [";
    const STRING_BUSCA_FIM_SALAID = "]";

    private $repository;
    private $validator;
    private $configuracoesRepository;
    private $periodoLetivoRepository;
    private $userService;
    private $statusRepository;
    private $exceptionMessagesController;

    public function __construct(
        SalaRepository              $repository,
        SalaValidator               $validator,
        ConfiguracoesRepository     $configuracoesRepository,
        PeriodoLetivoRepository     $periodoLetivoRepository,
        UserService                 $userService,
        StatusRepository            $statusRepository,
        MessagesController          $exceptionMessagesController
    ) {
        $this->repository                       = $repository;
        $this->validator                        = $validator;
        $this->configuracoesRepository          = $configuracoesRepository;
        $this->periodoLetivoRepository          = $periodoLetivoRepository;
        $this->userService                      = $userService;
        $this->statusRepository                 = $statusRepository;
        $this->exceptionMessagesController      = $exceptionMessagesController;
    }

    public function all()
    {
        return $this->repository->all();
    }

    public function allUsers()
    {
        return $this->userService->all();
    }


    public function findOrFail($id)
    {
        return $this->repository->findOrFail($id);
    }

    public function getSufixoNomeSala($plId)
    {
        $sufixoNomeSala = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_SUFIXO_NOME_SALA)->first('valor');
        if ($sufixoNomeSala === "NULL")
            return "";
        if ($sufixoNomeSala)
            return $sufixoNomeSala;
        $pl = $this->periodoLetivoRepository->find($plId);
        if (!$pl) {
            //abort(400, "Período letivo não encontrado");
            return "";
        }
        return $pl->sufixo;
    }


    public function preparaCreate()
    {
        //$sala = (object) ['nome_professor'=> '', 'email' => ''];
        $sala = new Sala();
        $plId = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_PERIODO_LETIVO_PADRAO)->first();
        if ($plId)
            $sala->periodo_letivo_id = $plId->valor;
        $usuarioLogado = Auth::user();
        if ($usuarioLogado != null) {
            $sala->solicitante_id = $usuarioLogado->id;
            $sala->email = $this->userService->usuarioEmail($usuarioLogado->id);
        }

        //return json_encode($sala);
        if (!$this->userService->crivoUsuariosAutorizados($sala))
            abort(401, "Usuário não autorizado à criar salas no moodle!");

        return $sala;
    }

    public function statusSala($request, $salaId, $status, $mensagem)
    {
        $sala = Sala::find($salaId);
        if ($sala == NULL)
            abort(404, "Sala não Encontrada");
        if ($status == NULL)
            $status = $request->input('status');
        if ($mensagem == NULL)
            $mensagem = $request->input('mensagem');

        $sala->status = $this->statusRepository->findByField('chave', $status)->first();
        if (!$sala->status)
            abort(404, "Status Inválido!");
        $sala->mensagem = $mensagem;
        $sala->save();
        $configEmail = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_EMAIL_SUPORTE)->first();
        $configSeparadorEmail = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_SEPARADOR_EMAIL)->first();
        if (config('app.debug')) {
            return $sala;
            return view('email.email', ['sala' => $sala, 'email' => ($configEmail == NULL ? "" : $configEmail->valor)]);
        } else {
            Mail::to(array_map('trim', explode($configSeparadorEmail, $sala->email)))
                ->cc($configEmail != null ? array_map('trim', explode($configSeparadorEmail, $configEmail->valor)) : "")
                ->send(new SendMailUser($sala));

            return $sala;
        }
        //return $this->index();
    }

    public function store($request)
    {

        try {
            // validate
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            // process the login
            if ($vld) {

                $sufixoNomeSala = self::getSufixoNomeSala($request->input('periodo_letivo_id'));

                $usuarioLogado = Auth::user();

                //$a = Usuario::create($request->all());
                $sala = new Sala();
                //$sala->nome_professor = $request->input('nome_professor');
                if ($this->userService->isAdmin() && $request->input('solicitante_id'))
                    $sala->solicitante_id = $request->input('solicitante_id');
                else
                    $sala->solicitante_id = $usuarioLogado->id;
                $sala->email = $request->input('email');
                //$sala->faculdade = $request->input('faculdade');
                $sala->curso_id = $request->input('curso');
                $sala->nome_sala = $request->input('nome_sala') . ($sufixoNomeSala ? ' ' . $sufixoNomeSala : '');
                $sala->modalidade = $request->input('modalidade');
                $sala->objetivo_sala = $request->input('objetivo_sala');
                $sala->senha_aluno = $request->input('senha_aluno');
                //$sala->senha_professor = $request->input('senha_professor');
                $sala->observacao = $request->input('observacao');
                $sala->status = $this->statusRepository->findByField('chave', Status::STATUS_PADRAO_INICIO)->first();
                $sala->periodo_letivo_id = $request->input('periodo_letivo_id');
                $sala->carga_horaria_total_disciplina = $request->input('carga_horaria_total_disciplina');
                $sala->avaliacao = $request->input('avaliacao');
                $sala->turma_nome = $request->input('turma_nome');
                $sala->turma_id = $request->input('turma_id');
                $sala->periodo_letivo_key = $request->input('periodo_letivo_key');
                //$sala->curso_key = $request->input('curso_key');
                $sala->disciplina_key = $request->input('disciplina_key');

                $macro = App::make('SuperMacroService')->getMacroEspecializada($request, $sala);
                $sala->macro_id = $macro->id;

                $sala->estudantes = $request->input('estudantes') ?  $request->input('estudantes') : $this->findEstudantesSigecad($request, $sala->disciplina_key, $sala->periodo_letivo_id, $sala->turma_id, $sala->turma_nome, $sala->solicitante_id);

                if ($this->userService->crivoUsuariosAutorizados($sala))
                    $sala->save();
                else
                    abort(401, "Usuário não autorizado à criar salas no moodle!");

                $sala = $this->posCriaSala($request, $sala);

                $configEmail = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_EMAIL_SUPORTE)->first();
                $configSeparadorEmail = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_SEPARADOR_EMAIL)->first();
                if (config('app.debug')) {
                    return ['sala' => $sala, 'email' => ($configEmail == NULL ? "" : $configEmail->valor), 'redirect' => ''];
                } else {
                    Mail::to(array_map('trim', explode($configSeparadorEmail, $sala->email)))
                        ->cc($configEmail != null ? array_map('trim', explode($configSeparadorEmail, $configEmail->valor)) : "")
                        ->send(new SendMailUser($sala));
                    return ['sala' => $sala, 'email' => ($configEmail == NULL ? "" : $configEmail->valor), 'redirect' => '/salas/success/'];
                    //return Redirect::action('SalaController@success');
                }

                //return compact($a);
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }
}
