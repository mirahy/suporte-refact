<?

namespace App\Services;

use App\Http\Controllers\MessagesController;
use App\Models\Faculdade;
use App\Repositories\FaculdadeRepository;
use App\Validators\FaculdadeValidator;
use Exception;
use Prettus\Validator\Contracts\ValidatorInterface;

class FaculdadeService
{

    private $repository;
    private $validator;
    private $exceptionMessagesController;

    public function __construct(
        FaculdadeRepository $repository,
        FaculdadeValidator  $validator,
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

    public function store($request)
    {
        try {
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            if ($vld) {
                $faculdade = new Faculdade();
                $faculdade->sigla = $request->input('sigla');
                $faculdade->nome = $request->input('nome');
                $faculdade->auto_increment_ref = $request->input('auto_increment_ref');
                $faculdade->ativo = $request->input('ativo');
                $faculdade->save();
                return $faculdade;
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function update($request, $id)
    {
        try {
            $faculdade = Faculdade::find($id);
            if (!$faculdade)
                abort(404, 'Faculdade não encontrada');
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            if ($vld) {
                $faculdade->sigla = $request->input('sigla');
                $faculdade->nome = $request->input('nome');
                $faculdade->auto_increment_ref = $request->input('auto_increment_ref');
                $faculdade->ativo = $request->input('ativo');
                $faculdade->save();
                return $faculdade;
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function destroy($id)
    {
        $faculdade = $this->repository->find($id);
        if (!$faculdade)
            abort(404, 'Faculdade não encontrada');
        try {
            $faculdade->delete();
            return new Faculdade();
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }
}
