<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\PeriodoLetivoCreateRequest;
use App\Http\Requests\PeriodoLetivoUpdateRequest;
use App\Models\User;
use App\Repositories\PeriodoLetivoRepository;
use App\Services\PeriodoLetivoService;
use App\Validators\PeriodoLetivoValidator;

class PeriodoLetivosController extends Controller
{
    
    protected $service;
   

    public function __construct(PeriodoLetivoService $service)
    {
        $this->service      = $service;

        $this->middleware('auth');
        $this->middleware('permissao:' . User::PERMISSAO_ADMINISTRADOR . ',' . User::PERMISSAO_USUARIO);
        $this->middleware('permissao:' . User::PERMISSAO_ADMINISTRADOR)->except(['all']);
    }

    
    public function index()
    {
        return view("layouts.app-angular");
    }


    public function all(Request $request)
    {
        return $this->service->all();
    }

    public function getPeriodoLetivoIdPadrao(Request $request)
    {
        $c = $this->service->getPLIdPadrao();
        if ($c)
            return $c->valor;
        return "";
    }

    public function store(PeriodoLetivoCreateRequest $request)
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

    public function update(PeriodoLetivoUpdateRequest $request, $id)
    {
        return $this->service->update($request, $id);
    }


    public function destroy($id)
    {
        return $this->service->destroy($id);
    }

    public function getListaSigecad(Request $request)
    {
        return $this->service->getListaSigecad($request);
    }
}
