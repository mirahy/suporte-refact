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

    /**
     * Store a newly created resource in storage.
     *
     * @param  PeriodoLetivoCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(PeriodoLetivoCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $periodoLetivo = $this->repository->create($request->all());

            $response = [
                'message' => 'PeriodoLetivo created.',
                'data'    => $periodoLetivo->toArray(),
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
        $periodoLetivo = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $periodoLetivo,
            ]);
        }

        return view('periodoLetivos.show', compact('periodoLetivo'));
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
        $periodoLetivo = $this->repository->find($id);

        return view('periodoLetivos.edit', compact('periodoLetivo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  PeriodoLetivoUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(PeriodoLetivoUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $periodoLetivo = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'PeriodoLetivo updated.',
                'data'    => $periodoLetivo->toArray(),
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
                'message' => 'PeriodoLetivo deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'PeriodoLetivo deleted.');
    }
}
