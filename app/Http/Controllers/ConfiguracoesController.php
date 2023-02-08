<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ConfiguracoesCreateRequest;
use App\Http\Requests\ConfiguracoesUpdateRequest;
use App\Repositories\ConfiguracoesRepository;
use App\Validators\ConfiguracoesValidator;

/**
 * Class ConfiguracoesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ConfiguracoesController extends Controller
{
    /**
     * @var ConfiguracoesRepository
     */
    protected $repository;

    /**
     * @var ConfiguracoesValidator
     */
    protected $validator;

    /**
     * ConfiguracoesController constructor.
     *
     * @param ConfiguracoesRepository $repository
     * @param ConfiguracoesValidator $validator
     */
    public function __construct(ConfiguracoesRepository $repository, ConfiguracoesValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $configuracoes = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $configuracoes,
            ]);
        }

        return view('configuracoes.index', compact('configuracoes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ConfiguracoesCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ConfiguracoesCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $configuraco = $this->repository->create($request->all());

            $response = [
                'message' => 'Configuracoes created.',
                'data'    => $configuraco->toArray(),
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
        $configuraco = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $configuraco,
            ]);
        }

        return view('configuracoes.show', compact('configuraco'));
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
        $configuraco = $this->repository->find($id);

        return view('configuracoes.edit', compact('configuraco'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ConfiguracoesUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ConfiguracoesUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $configuraco = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Configuracoes updated.',
                'data'    => $configuraco->toArray(),
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
                'message' => 'Configuracoes deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Configuracoes deleted.');
    }
}
