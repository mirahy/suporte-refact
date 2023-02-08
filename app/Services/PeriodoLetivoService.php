<?

namespace App\Services;

use App\Models\Configuracoes;
use App\Repositories\ConfiguracoesRepository;
use App\Repositories\PeriodoLetivoRepository;
use Illuminate\Http\Request;

class PeriodoLetivoService{

    private $repository;
    private $configuracoesRepository;

    public function __construct(
        PeriodoLetivoRepository $repository,
        ConfiguracoesRepository $configuracoesRepository,)
    {
        $this->repository                  = $repository;
        $this->configuracoesRepository     = $configuracoesRepository;
    }


    public function all()
    {
        return $this->repository->all();
    }

    public function getPLIdPadrao()
    {
        $c = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_PERIODO_LETIVO_PADRAO)->first();
        if ($c)
            return $c->valor;
        return "";
    }

}