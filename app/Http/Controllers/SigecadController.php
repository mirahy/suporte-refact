<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\SigecadCreateRequest;
use App\Http\Requests\SigecadUpdateRequest;
use App\Repositories\SigecadRepository;
use App\Services\SigecadService;
use App\Validators\SigecadValidator;

/**
 * Class SigecadsController.
 *
 * @package namespace App\Http\Controllers;
 */
class SigecadController extends Controller
{
    private $service;
   
    public function __construct(
        SigecadService $service
    )
    {
        $this->service      = $service;
    }

    public function getPeriodoLetivoList(Request $request){
        return $this->service->getPeriodoLetivoList($request);
    }

}
