<?

namespace App\Services;

use App\Http\Controllers\MessagesController;
use App\Http\Controllers\SigecadController;
use App\Models\Configuracoes;
use App\Models\PeriodoLetivo;
use App\Repositories\ConfiguracoesRepository;
use App\Repositories\PeriodoLetivoRepository;
use App\Validators\PeriodoLetivoValidator;
use Exception;
use Illuminate\Http\Request;
use Prettus\Validator\Contracts\ValidatorInterface;

class PeriodoLetivoService
{
    private $validator;
    private $repository;
    private $sigecadController;
    private $configuracoesRepository;
    private $exceptionMessagesController;
  

    public function __construct(
        PeriodoLetivoRepository $repository,
        PeriodoLetivoValidator $validator,
        ConfiguracoesRepository $configuracoesRepository,
        MessagesController $exceptionMessagesController,
        SigecadController $sigecadController
    ) {
        $this->validator                    = $validator;
        $this->repository                   = $repository;
        $this->sigecadController            = $sigecadController;
        $this->configuracoesRepository      = $configuracoesRepository;
        $this->exceptionMessagesController  = $exceptionMessagesController;
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

    public function store($request)
    {
        try {
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            if ($vld) {
                $periodoLetivo = new PeriodoLetivo();
                $periodoLetivo->nome = $request->input('nome');
                $periodoLetivo->id_sigecad = $request->input('id_sigecad');
                $periodoLetivo->descricao = $request->input('descricao');
                $periodoLetivo->sufixo = $request->input('sufixo');
                $periodoLetivo->inicio_auto_increment = $request->input('inicio_auto_increment');
                $periodoLetivo->ativo = $request->has('ativo') ? $request->input('ativo') : false;
                $periodoLetivo->save();
                return $periodoLetivo;
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function update($request, $id)
    {
        try {
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            $periodoLetivo = $this->repository->find($id);
            if (!$periodoLetivo)
                abort(404, 'Periodo Letivo não encontrado');
            if ($vld) {
                $periodoLetivo->nome = $request->input('nome');
                $periodoLetivo->id_sigecad = $request->input('id_sigecad');
                $periodoLetivo->inicio_auto_increment = $request->input('inicio_auto_increment');
                $periodoLetivo->descricao = $request->input('descricao');
                $periodoLetivo->sufixo = $request->input('sufixo');
                $periodoLetivo->ativo = $request->has('ativo') ? $request->input('ativo') : false;
                $periodoLetivo->save();
                return $periodoLetivo;
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function destroy($id)
    {
        $periodoLetivo =  $this->repository->find($id);
        if (!$periodoLetivo)
            abort(404, 'Periodo Letivo não encontrado');
        try {
            $periodoLetivo->delete();
            return new PeriodoLetivo();
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function getListaSigecad($request)
    {
        return $this->sigecadController->getPeriodoLetivoList($request);
    }
}
