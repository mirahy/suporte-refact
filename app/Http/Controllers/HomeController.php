<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $env = env('APP_ENV', 'production');
        if ($env == 'local' || $env == 'development')
            $this->middleware('authdev:ti.ead');
        else
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        if ($request->session()->has('recurso'))
            $request->session()->forget('recurso');
        if ($request->session()->has('isGestor'))
            $request->session()->forget('isGestor');
        if ($request->session()->has('link'))
            $request->session()->forget('link');
        return view('home');
    }

    // public function statuslist () {
    //     return Status::all();
    // }

    
    // public function getSufixoNomeSala(Request $request) {
    //     return Configuracoes::where('nome', Configuracoes::CONFIGURACAO_SUFIXO_NOME_SALA)->first()->valor;
    // }

}
