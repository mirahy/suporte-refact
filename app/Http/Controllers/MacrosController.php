<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MacroCreateRequest;
use App\Http\Requests\MacroUpdateRequest;
use App\Models\User;
use App\Repositories\MacroRepository;
use App\Services\MacroService;
use App\Validators\MacroValidator;
use Illuminate\Support\Facades\File;

/**
 * Class MacrosController.
 *
 * @package namespace App\Http\Controllers;
 */
class MacrosController extends Controller
{
    protected $service;

    public function __construct(
        MacroService $service
    ) {
        $this->service      = $service;

        $this->middleware('auth');
        $this->middleware('permissao:' . User::PERMISSAO_ADMINISTRADOR);
    }

    public function config()
    {
        return $this->service->config();
    }

    public function updateConfig(Request $request)
    {
        return $this->service->updateConfig($request);
    }

    public function index2()
    {
        $arrayRemessa = [];
        $files = File::files($this->service::CAMINHO_STORAGE_PADRAO . "/" . $this->service::STORAGE_ARQUIVOS);
        foreach ($files as $path) {
            $arrayRemessa[] = $path->getPathName();
        }
        //return $files;
        return view('macro', ['arquivos' =>  $files]);
    }


    public function index()
    {
        return view("layouts.app-angular");
    }

    public function all()
    {
        return $this->service->all();
    }

    public function buscadores()
    {
        return $this->service->buscadores();
    }

    public function getBuscadores($macroId)
    {
        return $this->service->getBuscadores($macroId);
    }

    public function addSetBuscador(Request $request, $macroId)
    {
        return $this->service->addSetBuscador($request, $macroId);
    }

    public function delBuscador($buscadorId)
    {
        return $this->service->delBuscador($buscadorId);
    }

    public function createUpdate(Request $request)
    {
        return $this->service->createUpdate($request);
    }

    public function delete($id)
    {
        return $this->service->delete($id);
    }

    public function listFiles()
    {
        return $this->service->listFiles();
    }

    public function download()
    {
        return $this->service->download();
    }

    public function store(MacroCreateRequest $request)
    {
        return $this->service->store($request);
    }

    public function mudarArquivo(Request $request)
    {
        return $this->service->mudarArquivo($request);
    }

    public function executar($salaId, $autorestore = false)
    {
        return $this->service->executar($salaId, $autorestore);
    }

    public function executarOld($salaOldId, $autorestore = false)
    {
        return $this->service->executarOld($salaOldId, $autorestore);
    }

    public function makeCurlFile($salaId)
    {
        return $this->service->makeCurlFile($salaId);
    }
}
