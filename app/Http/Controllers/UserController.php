<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $service;

    public function __construct(UserService $service)
    {
        $this->service   = $service;

        $this->middleware('auth');
        $this->middleware('permissao:' . User::PERMISSAO_ADMINISTRADOR)->except(['usuarioLogado', 'list']);
    }

    public function index()
    {
        //$u = Usuario::with(['setor:id,sigla,campus_id'])->get(['id','login','nome','email','permissao','setor_id']);
        //$u = Usuario::all();
        //return $u;
        //return view('config.usuarios',['usuarios' => $this->all()]);
        return view("layouts.app-angular");
    }


    public function all()
    {
        return $this->service->all();
    }

    public function list()
    {
        if ($this->service->isAdmin())
            return $this->service->all();
        else
            return [];
    }

    public function show(User $usuario)
    {
        return $this->service->show($usuario);
    }

    public function store(UserCreateRequest $request)
    {
        return $this->service->store($request);
    }

    public function edit(User $usuario)
    {
        //$us = Usuario::findOrFail($usuario);
        //return $usuario->with(['setor:id,sigla,campus_id'])->get(['id','login','nome','email','permissao','setor_id']);
        return $usuario;
    }

    public function update(UserUpdateRequest $request, User $usuario)
    {
        return $this->service->update($request, $usuario);
    }

    public function destroy(User $usuario)
    {
        return $this->service->destroy($usuario);
    }
}
