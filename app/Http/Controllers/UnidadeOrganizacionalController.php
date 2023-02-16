<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\UnidadeOrganizacionalCreateRequest;
use App\Http\Requests\UnidadeOrganizacionalUpdateRequest;
use App\Models\User;
use App\Services\UnidadeOrganizacionalService;

/**
 * Class UnidadeOrganizacionalsController.
 *
 * @package namespace App\Http\Controllers;
 */
class UnidadeOrganizacionalController extends Controller
{
  
    protected $service;


    public function __construct(UnidadeOrganizacionalService $service)
    {
        $this->service      = $service;

        $this->middleware('auth');
        $this->middleware('permissao:'.User::PERMISSAO_ADMINISTRADOR);
        
    }

    public function all()
    {
        return $this->service->all();
    }

    public function getOuDirRoot (Request $request) 
    {
        return $this->service->getOuDirRoot($request);
    }

    public function setOuDirRoot (Request $request) 
    {
        return $this->service->setOuDirRoot($request);
    }

    
    public function index()
    {
        return view("layouts.app-angular");
    }

    public function getLdapUser(Request $request, $username) 
    {
        return $this->service->getLdapUser($request, $username);
    }

    public function getLdapUserByEmail(Request $request, $email)
    {
        return $this->service->getLdapUserByEmail($request, $email);
    }

    public function alterarSenha(Request $request) 
    {
        return $this->service->alterarSenha($request);
    }

    public function substituiEmailsPorPadrao (Request $request)
    {
        return $this->service->substituiEmailsPorPadrao($request);
    }

    public function getOusFilhas () 
    {
        return $this->service->getOusFilhas();
    }

    public function criarContasAD(Request $request)
    {
        return $this->service->criarContasAD($request);
    }

   
    public function store(UnidadeOrganizacionalCreateRequest $request)
    {
        return $this->service->store($request);
    }

    public function show($id)
    {
        return $this->service->show($id);
    }


    public function edit($id)
    {
        // 
    }


    public function update(UnidadeOrganizacionalUpdateRequest $request, $id)
    {
        return $this->service->update($request, $id);
    }


    public function destroy($id)
    {
        return $this->service->destroy($id);
    }
}
