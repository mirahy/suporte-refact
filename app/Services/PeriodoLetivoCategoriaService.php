<?

namespace App\Services;

use App\Http\Controllers\MessagesController;
use App\Repositories\PeriodoLetivoCategoriaRepository;
use App\Repositories\PeriodoLetivoRepository;
use App\Validators\PeriodoLetivoCategoriaValidator;
use Exception;
use Prettus\Validator\Contracts\ValidatorInterface;

class PeriodoLetivoCategoriaService
{

    private $repositoryPeriodoletivo;
    private $validator;
    private $exceptionMessagesController;

    public function __construct(
        PeriodoLetivoCategoriaRepository $repositoryPeriodoletivo,
        PeriodoLetivoCategoriaValidator $validator,
        MessagesController $exceptionMessagesController
    ) {
        $this->repositoryPeriodoletivo          = $repositoryPeriodoletivo;
        $this->validator                        = $validator;
        $this->exceptionMessagesController      = $exceptionMessagesController;
    }


    public function all($periodoLetivoId)
    {
        return $this->repositoryPeriodoletivo->findWhere(['periodo_letivo_id' => $periodoLetivoId]);
    }

    public function store($request)
    {

        try {
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            if ($vld) {

                $periodoLetivoCategoria = $this->repositoryPeriodoletivo
                    ->findWhere([
                        'curso_id' => $request->input('curso_id'),
                        'periodo_letivo_id' => $request->input('periodo_letivo_id')
                    ])
                    ->first();
                if (!$periodoLetivoCategoria)
                    abort(404, '"Periodo Letivo - Categoria" não encontrado');

                $periodoLetivoCategoria->categoria_id = $request->input('categoria_id');
                $periodoLetivoCategoria->save();
                return $periodoLetivoCategoria->categoria_id;

                /*$periodoLetivoCategoria = new PeriodoLetivoCategoria();
                $periodoLetivoCategoria->curso_id = $request->input('curso_id');
                $periodoLetivoCategoria->periodo_letivo_id = $request->input('periodo_letivo_id');
                $periodoLetivoCategoria->categoria_id = $request->input('categoria_id');
                $periodoLetivoCategoria->save();
                return $periodoLetivoCategoria;*/
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function update($request, $id)
    {/*
        $periodoLetivoCategoria = PeriodoLetivoCategoria::find($id);
        if (!$periodoLetivoCategoria) 
            abort(404, '"Periodo Letivo - Categoria" não encontrado');*/
    }

    public function destroy($id)
    {/*
        $periodoLetivoCategoria = PeriodoLetivoCategoria::find($id);
        if (!$periodoLetivoCategoria) 
            abort(404, '"Periodo Letivo - Categoria" não encontrado');
        try{
            $periodoLetivoCategoria->delete();
            return new PeriodoLetivoCategoria();
        }
        catch (Exception $e) {
            abort(400, $e->getMessage());
        }*/
    }
}
