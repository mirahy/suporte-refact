<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\SalaOldCreateRequest;
use App\Http\Requests\SalaOldUpdateRequest;
use App\Repositories\SalaOldRepository;
use App\Validators\SalaOldValidator;

/**
 * Class SalaOldsController.
 *
 * @package namespace App\Http\Controllers;
 */
class SalaOldsController extends Controller
{
    /**
     * @var SalaOldRepository
     */
    protected $repository;

    /**
     * @var SalaOldValidator
     */
    protected $validator;

    /**
     * SalaOldsController constructor.
     *
     * @param SalaOldRepository $repository
     * @param SalaOldValidator $validator
     */
    public function __construct(SalaOldRepository $repository, SalaOldValidator $validator)
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
        $salaOlds = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $salaOlds,
            ]);
        }

        return view('salaOlds.index', compact('salaOlds'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  SalaOldCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(SalaOldCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $salaOld = $this->repository->create($request->all());

            $response = [
                'message' => 'SalaOld created.',
                'data'    => $salaOld->toArray(),
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
        $salaOld = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $salaOld,
            ]);
        }

        return view('salaOlds.show', compact('salaOld'));
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
        $salaOld = $this->repository->find($id);

        return view('salaOlds.edit', compact('salaOld'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  SalaOldUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(SalaOldUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $salaOld = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'SalaOld updated.',
                'data'    => $salaOld->toArray(),
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
                'message' => 'SalaOld deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'SalaOld deleted.');
    }
}
