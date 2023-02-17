<?

namespace App\Services;

use Adldap\Laravel\Facades\Adldap;
use App\Http\Controllers\MessagesController;
use App\Repositories\SalaOldRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Prettus\Validator\Contracts\ValidatorInterface;

class SalaOldService
{

    private $repository;
    private $validator;
    private $exceptionMessagesController;

    public function __construct(
        SalaOldRepository      $repository,
        SalaOldService         $validator,
        MessagesController     $exceptionMessagesController
    ) {
        $this->repository                   = $repository;
        $this->validator                    = $validator;
        $this->exceptionMessagesController  = $exceptionMessagesController;
    }

}