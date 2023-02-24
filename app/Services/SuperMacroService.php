<?

namespace App\Services;


use App\Http\Controllers\MessagesController;
use App\Repositories\SuperMacroRepository;
use App\Validators\SuperMacroValidator;


class SuperMacroService
{


    private $repository;
    private $validator;
    private $exceptionMessagesController;


    public function __construct(
        SuperMacroRepository        $repository,
        SuperMacroValidator         $validator,
        MessagesController          $exceptionMessagesController
    ) {
        $this->repository                   = $repository;
        $this->validator                    = $validator;
        $this->exceptionMessagesController  = $exceptionMessagesController;
    }

    public function all()
    {
        return $this->repository->all();
    }
}
