<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\FaculdadeCreateRequest;
use App\Http\Requests\FaculdadeUpdateRequest;
use App\Models\User;
use App\Repositories\FaculdadeRepository;
use App\Services\FaculdadeService;
use App\Validators\FaculdadeValidator;

/**
 * Class FaculdadesController.
 *
 * @package namespace App\Http\Controllers;
 */
class FaculdadesController extends Controller
{

    protected $service;

    public function __construct(
        FaculdadeService $service
    ) {
        $this->service       = $service;

        $this->middleware('auth');
        $this->middleware('permissao:' . User::PERMISSAO_ADMINISTRADOR . ',' . User::PERMISSAO_USUARIO);
        $this->middleware('permissao:' . User::PERMISSAO_ADMINISTRADOR)->except(['all']);
    }


    public function index()
    {
        return view("layouts.app-angular");
    }

    public function all()
    {
        return $this->service->all();
    }


    public function store(FaculdadeCreateRequest $request)
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


    public function update(FaculdadeUpdateRequest $request, $id)
    {
        return $this->service->update($request, $id);
    }


    public function destroy($id)
    {
        return $this->service->destroy($id);
    }
}
