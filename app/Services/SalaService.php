<?

namespace App\Services;

use App\Models\Configuracoes;
use App\Models\Sala;
use App\Models\User;
use App\Repositories\ConfiguracoesRepository;
use App\Repositories\PeriodoLetivoRepository;
use App\Repositories\SalaRepository;
use App\Repositories\UserRepository;
use App\Validators\SalaValidator;
use Illuminate\Support\Facades\Auth;
use Prettus\Validator\Contracts\ValidatorInterface;

class SalaService {

    const ARQUIVO_SCRIPT_RESTAURACAO_AUTOMATICA = "auto-restore.php";
    const SUFIXO_URL_SALAID = "course/view.php?id=";
    const STRING_BUSCA_INIC_SALAID = "Curso Criado: [";
    const STRING_BUSCA_FIM_SALAID = "]";

    private $repository;
    private $validator;
    private $configuracoesRepository;
    private $periodoLetivoRepository;
    private $userRepository;

    public function __construct(
        SalaRepository $repository,
        SalaValidator $validator,
        ConfiguracoesRepository $configuracoesRepository,
        PeriodoLetivoRepository $periodoLetivoRepository,
        UserRepository $userRepository)
    {
        $this->repository                  = $repository;
        $this->validator                   = $validator;
        $this->configuracoesRepository     = $configuracoesRepository;
        $this->periodoLetivoRepository     = $periodoLetivoRepository;
        $this->userRepository              = $userRepository;
    }

    public function all()
    {
        return $this->repository->all();
    }

    public function allUsers()
    {
        return $this->userRepository->all();
    }


    public function findOrFail($id)
    {
        return $this->repository->findOrFail($id);
    }

    public function getSufixoNomeSala($plId) {
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

    public function makeSala()
    {

        $sala = new Sala();
        $usuarioLogado = Auth::user();
        if ($usuarioLogado != null) {
            $sala->nome_professor = $usuarioLogado->name;
            $sala->email = App::make('UsuarioService')->usuarioEmail($usuarioLogado->id);
        }

        return $sala;
    }
}