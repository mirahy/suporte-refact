<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\BuscadorCreateRequest;
use App\Http\Requests\BuscadorUpdateRequest;
use App\Repositories\BuscadorRepository;
use App\Validators\BuscadorValidator;

/**
 * Class BuscadorsController.
 *
 * @package namespace App\Http\Controllers;
 */
class BuscadorsController extends Controller
{
    /**
     * @var BuscadorRepository
     */
    protected $repository;

    /**
     * @var BuscadorValidator
     */
    protected $validator;

    /**
     * BuscadorsController constructor.
     *
     * @param BuscadorRepository $repository
     * @param BuscadorValidator $validator
     */
    public function __construct(BuscadorRepository $repository, BuscadorValidator $validator)
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
        $buscadors = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $buscadors,
            ]);
        }

        return view('buscadors.index', compact('buscadors'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  BuscadorCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(BuscadorCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $buscador = $this->repository->create($request->all());

            $response = [
                'message' => 'Buscador created.',
                'data'    => $buscador->toArray(),
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
        $buscador = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $buscador,
            ]);
        }

        return view('buscadors.show', compact('buscador'));
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
        $buscador = $this->repository->find($id);

        return view('buscadors.edit', compact('buscador'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  BuscadorUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(BuscadorUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $buscador = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Buscador updated.',
                'data'    => $buscador->toArray(),
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
                'message' => 'Buscador deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Buscador deleted.');
    }
}
