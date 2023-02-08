<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\SalaCreateRequest;
use App\Http\Requests\SalaUpdateRequest;
use App\Models\User;
use App\Repositories\SalaRepository;
use App\Repositories\UserRepository;
use App\Services\SalaService;
use App\Services\UserService;

/**
 * Class SalasController.
 *
 * @package namespace App\Http\Controllers;
 */
class SalasController extends Controller
{
    protected $service;
    protected $repository;


    /**
     * SalasController constructor.
     */
    public function __construct(
        SalaRepository $repository,
        SalaService $service)
    {
        $this->service          = $service;
        $this->repository       = $repository;

        $this->middleware('auth');
        $this->middleware('permissao:'.User::PERMISSAO_ADMINISTRADOR.','.User::PERMISSAO_USUARIO);
        $this->middleware('permissao:'.User::PERMISSAO_ADMINISTRADOR)->except(['create', 'store', 'success', 'preparaCreate', 'chargeDisciplina', 'getModalidades', 'getObjetivosSalas']);
        
    }

    
    public function index()
    {
        return view("layouts.app-angular");
    }

    public function listar()
    {
        return $this->service->all();
    }

    public function criar()
    {
        return view("salas.cria-sala");
    }

    public function visualizar($id)
    {           
        $sala = $this->service->findOrFail($id);
        return view("salas.visualiza-sala", ['sala' => $sala]);
    }

    public function create()
    {
        return view("layouts.app-angular");
    }


    public function createOld()
    {
        $sala = $this->service->makeSala();
        
        return view("salas.cria-sala", ['sala' => $sala]);
    }

    public function listUsers()
    {
        return $this->service->allUsers();

    }






    /**
     * Store a newly created resource in storage.
     *
     * @param  SalaCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(SalaCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $sala = $this->repository->create($request->all());

            $response = [
                'message' => 'Sala created.',
                'data'    => $sala->toArray(),
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
        $sala = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $sala,
            ]);
        }

        return view('salas.show', compact('sala'));
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
        $sala = $this->repository->find($id);

        return view('salas.edit', compact('sala'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  SalaUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(SalaUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $sala = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Sala updated.',
                'data'    => $sala->toArray(),
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
                'message' => 'Sala deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Sala deleted.');
    }
}
