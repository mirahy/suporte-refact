<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\PeriodoLetivoCategoriaCreateRequest;
use App\Http\Requests\PeriodoLetivoCategoriaUpdateRequest;
use App\Models\User;
use App\Repositories\PeriodoLetivoCategoriaRepository;
use App\Services\PeriodoLetivoCategoriaService;
use App\Validators\PeriodoLetivoCategoriaValidator;

/**
 * Class PeriodoLetivoCategoriasController.
 *
 * @package namespace App\Http\Controllers;
 */
class PeriodoLetivosCategoriasController extends Controller
{
    protected $service;
   
    public function __construct(PeriodoLetivoCategoriaService $service)
    {
       $this->service = $service;

        $this->middleware('auth');
        $this->middleware('permissao:'.User::PERMISSAO_ADMINISTRADOR.','.User::PERMISSAO_USUARIO);
        $this->middleware('permissao:'.User::PERMISSAO_ADMINISTRADOR)->except(['all']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("layouts.app-angular");
    }

    public function all(Request $request, $periodoLetivoId)
    {
        return $this->service->all($periodoLetivoId);
    }

   
    public function store(PeriodoLetivoCategoriaCreateRequest $request)
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

   
    public function update(PeriodoLetivoCategoriaUpdateRequest $request, $id)
    {
        // 
    }


    public function destroy($id)
    {
        // 
    }
}
