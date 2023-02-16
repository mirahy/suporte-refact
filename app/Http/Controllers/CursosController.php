<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\CursoCreateRequest;
use App\Http\Requests\CursoUpdateRequest;
use App\Models\User;
use App\Repositories\CursoRepository;
use App\Services\CursoService;
use App\Validators\CursoValidator;

/**
 * Class CursosController.
 *
 * @package namespace App\Http\Controllers;
 */
class CursosController extends Controller
{
    protected $service;
   
    public function __construct(
        CursoService $service
    )
    {
        $this->service      = $service;
        
        $this->middleware('auth');
        $this->middleware('permissao:'.User::PERMISSAO_ADMINISTRADOR);
    }

    
    public function index()
    {
        // 
    }

   
    public function store(CursoCreateRequest $request)
    {
        return $this->service->store($request);
    }

    
    public function show($id)
    {
        // 
    }

   
    public function edit($id)
    {
        // 
    }

    
    public function update(CursoUpdateRequest $request, $id)
    {
        return $this->service->update($request, $id);
    }


    public function destroy($id)
    {
       return $this->service->destroy($id);
    }
}
