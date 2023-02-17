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
    )
    {
        $this->service      = $service;

        $this->middleware('auth');
        $this->middleware('permissao:'.User::PERMISSAO_ADMINISTRADOR);
        
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
        foreach($files as $path)
        {
            $arrayRemessa[] = $path->getPathName();
        }
        //return $files;
        return view('macro',['arquivos' =>  $files]);
    }

    
    public function index()
    {
        return view("layouts.app-angular");
    }

    public function all () 
    {
        return $this->service->all();
    }

    public function buscadores () 
    {
        return $this->service->buscadores();
    }

    public function getBuscadores($macroId) 
    {
        return $this->service->getBuscadores($macroId);
    }

    public function addSetBuscador (Request $request, $macroId)
    {
        $this->service->addSetBuscador($request, $macroId);
    }

    public function delBuscador ($buscadorId)
    {
        $this->service->delBuscador($buscadorId);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MacroCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MacroCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $macro = $this->repository->create($request->all());

            $response = [
                'message' => 'Macro created.',
                'data'    => $macro->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {
            if ($request->wantsJson()) {
                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $macro = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $macro,
            ]);
        }

        return view('macros.show', compact('macro'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $macro = $this->repository->find($id);

        return view('macros.edit', compact('macro'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MacroUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MacroUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $macro = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Macro updated.',
                'data'    => $macro->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'Macro deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Macro deleted.');
    }
}
