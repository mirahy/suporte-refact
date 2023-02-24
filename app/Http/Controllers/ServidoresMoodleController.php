<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ServidorMoodleCreateRequest;
use App\Http\Requests\ServidorMoodleUpdateRequest;
use App\Models\User;
use App\Repositories\ServidorMoodleRepository;
use App\Services\ServidorMoodleService;
use App\Validators\ServidorMoodleValidator;

/**
 * Class ServidorMoodlesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ServidoresMoodleController extends Controller
{
    protected $service;

    public function __construct(
        ServidorMoodleService $service
    ) {
        $this->service = $service;

        $this->middleware('auth');
        $this->middleware('permissao:' .User::PERMISSAO_ADMINISTRADOR);
    }

    public function all()
    {
        return $this->service->all();
    }


    public function links()
    {
        return $this->service->links();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $servidorMoodles = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $servidorMoodles,
            ]);
        }

        return view('servidorMoodles.index', compact('servidorMoodles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ServidorMoodleCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ServidorMoodleCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $servidorMoodle = $this->repository->create($request->all());

            $response = [
                'message' => 'ServidorMoodle created.',
                'data'    => $servidorMoodle->toArray(),
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
        $servidorMoodle = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $servidorMoodle,
            ]);
        }

        return view('servidorMoodles.show', compact('servidorMoodle'));
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
        $servidorMoodle = $this->repository->find($id);

        return view('servidorMoodles.edit', compact('servidorMoodle'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ServidorMoodleUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ServidorMoodleUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $servidorMoodle = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'ServidorMoodle updated.',
                'data'    => $servidorMoodle->toArray(),
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
                'message' => 'ServidorMoodle deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'ServidorMoodle deleted.');
    }
}
