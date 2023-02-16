<?

namespace App\Services;

use App\Http\Controllers\MessagesController;
use App\Models\Curso;
use App\Repositories\CursoRepository;
use App\Validators\CursoValidator;
use Exception;
use Prettus\Validator\Contracts\ValidatorInterface;

class CursoService
{

    private $repository;
    private $validator;
    private $exceptionMessagesController;

    public function __construct(
        CursoRepository $repository,
        CursoValidator  $validator,
        MessagesController  $exceptionMessagesController
    ) {
        $this->repository                   = $repository;
        $this->validator                    = $validator;
        $this->exceptionMessagesController  = $exceptionMessagesController;
    }


    public function store($request)
    {
        try {
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            if ($vld) {
                $curso = new Curso();
                $curso->nome = $request->input('nome');
                $curso->faculdade_id = $request->input('faculdade_id');
                $curso->curso_key = $request->input('curso_key');
                $curso->auto_increment_ref = $request->input('auto_increment_ref');
                $curso->ativo = $request->input('ativo');
                $curso->save();
                return $curso;
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function update($request, $id)
    {
        try {
            $curso = $this->repository->find($id);
            if (!$curso)
                abort(404, 'Curso não encontrado');
            $vld = $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            if ($vld) {
                $curso->nome = $request->input('nome');
                $curso->faculdade_id = $request->input('faculdade_id');
                $curso->curso_key = $request->input('curso_key');
                $curso->auto_increment_ref = $request->input('auto_increment_ref');
                $curso->ativo = $request->input('ativo');
                $curso->save();
                return $curso;
            }
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function destroy($id)
    {
        $curso = $this->repository->find($id);
        if (!$curso) 
            abort(404, 'Curso não encontrado');
        try{
            $curso->delete();
            return new Curso();
        }
        catch (Exception $e) {
            abort(400, $e->getMessage());
        }
    }
}
