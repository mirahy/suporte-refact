<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\SuperMacroCreateRequest;
use App\Http\Requests\SuperMacroUpdateRequest;
use App\Models\User;
use App\Repositories\SuperMacroRepository;
use App\Services\SuperMacroService;
use App\Validators\SuperMacroValidator;

/**
 * Class SuperMacrosController.
 *
 * @package namespace App\Http\Controllers;
 */
class SuperMacrosController extends Controller
{
    protected  $service;

    public function __construct(SuperMacroService $service)
    {
        $this->service = $service;

        $this->middleware('auth');
        $this->middleware('permissao:'.User::PERMISSAO_ADMINISTRADOR);
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("layouts.app-angular");
    }

    public function all()
    {
        return $this->service->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  SuperMacroCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(SuperMacroCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $superMacro = $this->repository->create($request->all());

            $response = [
                'message' => 'SuperMacro created.',
                'data'    => $superMacro->toArray(),
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
        $superMacro = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $superMacro,
            ]);
        }

        return view('superMacros.show', compact('superMacro'));
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
        $superMacro = $this->repository->find($id);

        return view('superMacros.edit', compact('superMacro'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  SuperMacroUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(SuperMacroUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $superMacro = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'SuperMacro updated.',
                'data'    => $superMacro->toArray(),
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
                'message' => 'SuperMacro deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'SuperMacro deleted.');
    }
}
