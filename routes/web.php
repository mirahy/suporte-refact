<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\CursosController;
use App\Http\Controllers\FaculdadesController;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PeriodoLetivosCategoriasController;
use App\Http\Controllers\PeriodoLetivosController;
use App\Http\Controllers\SalasController;
use App\Http\Controllers\UserController;

// Grupo de rotas protegidas pela midlleware, ->>>criar midlaware para controle de login
Route::middleware([])->group(function () {

    //Grupo de rotas para a classe HomeController
    Route::controller(HomeController::class)->group(function () {
        Route::get('/', 'index');
        Route::get('/home', 'index')->name('home');
        Route::get('/statuslist', 'statuslist');
        Route::get('/sufixonome', 'getSufixoNomeSala');
    });

    //  //Grupo de rotas para a classe MacroController
    //  Route::controller(MacroController::class)->group(function(){
    //     Route::get('/macro', '@index');
    //     Route::post('/macro/file',  'store');
    //     Route::post('/macro/name', 'createUpdate');
    //     Route::get('/macro/all', 'all');
    //     Route::delete('/macro/{id}',  'delete');
    //     Route::get('/macro/busca',  'buscadores');
    //     Route::get('/macro/entradas', 'getEntradasBuscadores');
    //     Route::get('/macro/{macroId}/buscador', 'getBuscadores');
    //     Route::put('/macro/{macroId}/buscador', 'addSetBuscador');
    //     Route::delete('/macro/buscador/{buscadorId}', 'delBuscador');
    //     Route::post('/macro/mudararquivo', 'mudarArquivo');
    //     Route::get('/config', 'config');
    //     Route::post('/config', 'updateConfig');
    //     Route::get('/exec/{id}','executar');
    //     Route::get('/exec-old/{id}','executarOld');
    //     Route::get('/dd','download');
    //     Route::get('/files','listFiles');
    // });

    //  //Grupo de rotas para a classe SuperMacroController
    //  Route::controller(SuperMacroController::class)->group(function(){
    //     Route::get('/super-macro/all', 'all');
    //     Route::get('/super-macro/msm/order/{msmId1}/{msmId2}', 'ordenaMSM');
    //     Route::get('/super-macro/msm/campos', 'getMsmCampos');
    //     Route::get('/super-macro/msm/operadores', 'getMsmOperadores');
    //     Route::get('/super-macro/msm/{superMacroId}', 'allMSM');
    //     Route::post('/super-macro/msm', 'newMSM');
    //     Route::delete('/super-macro/msm/{msmId}', 'delMSM');
    //     Route::put('/super-macro/msm/{msmId}', 'updateMSM');
    //     Route::resource('super-macro', SuperMacroController::class);
    // });

    //Grupo de rotas para a classe SalaController
    Route::controller(SalasController::class)->group(function () {
        Route::get('/salas/status/{salaId}/{status}/{mensagem?}', 'statusSala')->where('mensagem', '(.*)');
        // //Route::get('/salas/status/{salaId}/{status}/{mensagem?}', 'TesteController@email')->where('mensagem', '(.*)');
        Route::patch('/salas/status/{salaId}', 'statusSala');
        Route::get('/salas/mensagem/{salaId}', 'mensagem');
        Route::post('/salas/autorestore/{salaId}', 'executarRestauracaoAutomatica');
        Route::post('/salas/autorestore-estudantes/{salaId}', 'exportarEstudantesMoodle');
        Route::get('/salas/success/', 'success');
        Route::post('/salas/{sala}/', 'update');
        Route::get('/salas/listar', 'listar');
        Route::get('/salas/preparacreate', 'preparaCreate');
        Route::get('/salas/modalidades', 'getModalidades');
        Route::get('/salas/objetivos', 'getObjetivosSalas');
        Route::get('/salas/charge/{periodoLetivoKey}/{codigoCurso}/{codigoDisciplina}/{salaTurma}', 'chargeDisciplina');
        Route::get('/salas/create/{periodoLetivoKey}/{codigoCurso}/{codigoDisciplina}/{salaTurma}', 'create');
        // // ->>>criar função dentro do conmtroller sala para recuperar usários e incluir rota no grupo SalaController
        Route::get('/salas/usuarios', 'listUsers');
        Route::resource('salas', SalasController::class);
    });



    // //Grupo de rotas para a classe SalasOldController
    // Route::controller(SalasOldController::class)->group(function(){
    //     Route::get('/salas-old/status/{salaId}/{status}/{mensagem?}', 'statusSala')->where('mensagem', '(.*)');
    //     Route::patch('/salas-old/status/{salaId}', 'statusSala');
    //     Route::get('/salas-old/mensagem/{salaId}', 'mensagem');
    //     Route::get('/salas-old/autorestore/{salaId}', 'executarRestauracaoAutomatica');
    //     Route::get('/salas-old/success/', 'success');
    //     Route::post('/salas-old/{sala}/', 'update');
    //     Route::get('/salas-old/listar', 'listar');
    //     Route::resource('salas-old', SalasOldController::class);
    // });

    // //Grupo de rotas para a classe LoteSalasController
    // Route::controller(LoteSalasController::class)->group(function(){
    //     Route::get('/lote-salas/all', 'all');
    //     Route::get('/lote-salas/exportacao/{loteId}', 'executaExportacoes');
    //     Route::get('/lote-salas/estudantes/{loteId}', 'insereEstudantes');
    //     Route::put('/lote-salas/macro', 'updateMacro');
    //     Route::resource('lote-salas', LoteSalasController::class);
    // });

    // //Grupo de rotas para a classe GrupoLotesSimplificadoController
    // Route::controller(GrupoLotesSimplificadoController::class)->group(function(){
    //     Route::get('/grupo-lotes-simplificados/all', 'all');
    //     Route::get('/grupo-lotes-simplificados/estudantes/{grupoId}', 'insereEstudantes');
    //     Route::resource('grupo-lotes-simplificados', GrupoLotesSimplificadoController::class);
    // });

    // //Grupo de rotas para a classe LoteSalasSimplificadosController
    // Route::controller(LoteSalasSimplificadosController::class)->group(function(){
    //     Route::get('lote-salas-simplificados/rota', 'rota');
    //     Route::get('lote-salas-simplificados/all/{grupoId}', 'all');
    //     Route::get('lote-salas-simplificados/exportacao/{loteId}', 'executaExportacoes');
    //     Route::get('lote-salas-simplificados/estudantes/{loteId}', 'insereEstudantes');
    //     Route::resource('lote-salas-simplificados', LoteSalasSimplificadosController::class);
    // });

    // //Grupo de rotas para a classe SalaSimplificadaController
    // Route::controller(SalaSimplificadaController::class)->group(function(){
    //     Route::get('salas-simplificadas/list-lote/{loteId}', 'listLote');
    //     Route::get('salas-simplificadas/macro/{salaId}', 'getMacro');
    //     Route::get('salas-simplificadas/refresh/{salaId}', 'refreshSala');
    //     Route::get('/salas-simplificadas/autorestore/{salaId}/{macroId}/{courseImportId?}', 'executarRestauracaoSala');
    //     Route::get('salas-simplificadas/estudantes/{sala}', 'insereEstudantes');
    //     Route::resource('salas-simplificadas', SalaSimplificadaController::class);
    // });

    //Grupo de rotas para a classe PeriodoLetivosController
    Route::controller(PeriodoLetivosController::class)->group(function () {
        Route::get('/periodo-letivos/all', 'all');
        Route::get('/periodo-letivos/id-padrao', 'getPeriodoLetivoIdPadrao');
        Route::get('/periodo-letivos/sigecad', 'getListaSigecad');
        Route::resource('periodo-letivos', PeriodoLetivosController::class);
    });

    //Grupo de rotas para a classe FaculdadesController
    Route::controller(FaculdadesController::class)->group(function(){
        Route::get('/faculdades/all', 'all');
        Route::resource('faculdades', FaculdadesController::class);
    });

    //Grupo de rotas para a classe CursosController
    Route::controller(CursosController::class)->group(function(){
        Route::get('/cursos/all', 'all');
        Route::resource('cursos', CursosController::class);
    });

    //Grupo de rotas para a classe PeriodoLetivosCategoriasController
    Route::controller(PeriodoLetivosCategoriasController::class)->group(function(){
        Route::get('/periodo-letivos-categorias/all/{periodoLetivoId}', 'all');
        Route::resource('periodo-letivos-categorias', PeriodoLetivosCategoriasController::class);
    });

    //  //Grupo de rotas para a classe PlDisciplinasAcademicosController
    //  Route::controller(PlDisciplinasAcademicosController::class)->group(function(){
    //     Route::get('/pl-disciplinas-academicos/find/{periodoLetivoId}/{cursoId}', 'find');
    //     Route::get('/pl-disciplinas-academicos/estudantes/{id}/{isDisciplinaCompleta?}', 'getEstudantes');
    //     Route::put('/pl-disciplinas-academicos/estudantes/{id}', 'setEstudantes');
    //     Route::post('/pl-disciplinas-academicos/estudantes/{periodoLetivoId}', 'processarArquivoEstudantes');
    //     Route::get('/pl-disciplinas-academicos/carrega-cursos-sigecad/{periodoLetivoId}', 'processaTabelaSigecad');
    //     Route::get('/pl-disciplinas-academicos/disciplinas-sigecad/{siglaFaculdade}/{periodoLetivoId}', 'getListaDisciplinasSigecad');
    //     Route::get('/pl-disciplinas-academicos/disciplinas-curso-sigecad/{periodoLetivoId}/{siglaFaculdade}/{codigoCurso?}', 'getDisciplinasCursoList');
    //     Route::get('/pl-disciplinas-academicos/academicos-disciplinas-sigecad/{codigoDisciplina}/{periodoLetivoId}/{turmaId}/{turmaNome}/{salaId?}', 'getAcademicosDisciplina');
    //     //Route::get('/pl-disciplinas-academicos/academicos-disciplinas-sigecad/{salaId}', 'getEstudantesSigecad');
    //     Route::resource('pl-disciplinas-academicos', PlDisciplinasAcademicosController::class);
    // });

    // //Grupo de rotas para a classe ServidoresMoodleController
    // Route::controller(ServidoresMoodleController::class)->group(function(){
    //     Route::get('/servidores-moodle/all', 'all');
    //     Route::get('/servidores-moodle/links', 'links');
    //     Route::get('/servidores-moodle/download-script', 'downloadScript');
    //     Route::resource('servidores-moodle', ServidoresMoodleController::class);
    // });

    //  //Grupo de rotas para a classe ServidoresMoodleController
    //  Route::controller(ServidoresMoodleController::class)->group(function(){
    //     Route::get('/servidores-moodle/all', 'all');
    //     Route::get('/servidores-moodle/links', 'links');
    //     Route::get('/servidores-moodle/download-script', 'downloadScript');
    //     Route::get('/formulario-recuperacao-arquivos', 'formulariosIndex');
    //     Route::resource('servidores-moodle', ServidoresMoodleController::class);
    // });

    // //Grupo de rotas para a classe AgendaController
    // Route::controller(AgendaController::class)->group(function(){
    //     //Route::get('/agenda', function () {return view("layouts.app-angular");});
    //     //->>>criar função calendario para retornar página
    //     Route::get('/calendario', function () {return view("layouts.app-angular-limpo");});
    //     Route::get('/agenda/listar', 'listar');
    //     Route::resource('agenda', AgendaController::class);
    // });

    // //Grupo de rotas para a classe RecursoController
    // Route::controller(RecursoController::class)->group(function(){
    //     Route::get('/recursos/{recursoId}/gestores', 'getGestoresRecurso');
    //     Route::get('/recursos/attach/{recursoId}/{gestorId}', 'attachGestor');
    //     Route::get('/recursos/detach/{recursoId}/{gestorId}', 'detachGestor');
    //     Route::get('/recursos/listar', 'listar');
    //     Route::resource('recursos', RecursoController::class);
    // });

    //  //Grupo de rotas para a classe ReservasController
    //  Route::controller(ReservasController::class)->group(function(){
    //     Route::get('/reservas/listar', 'listar');
    //     Route::get('/reservas/recurso', 'recurso');
    //     Route::get('/reservas/usuario', 'usuarioLogado');
    //     Route::put('/reservas/status', 'analiseGestor');
    //     Route::put('/reservas/cancelar', 'cancelar');
    //     Route::resource('reservas', ReservasController::class);
    // });

    //  //Grupo de rotas para a classe UnidadeOrganizacionalController
    //  Route::controller(UnidadeOrganizacionalController::class)->group(function(){
    //     Route::get('/formulario-insere-ad', 'index');
    //     Route::post('/formulario-insere-ad', 'criarContasAD');
    //     Route::post('/formulario-insere-ad/substitui-emails', 'substituiEmailsPorPadrao');
    //     Route::get('/formulario-altera-usuario', 'index');
    //     Route::post('/formulario-altera-usuario/password', 'alterarSenha');
    //     Route::get('/unidade-organizacional/ldapuser/{username}', 'getLdapUser');
    //     Route::get('/unidade-organizacional/ous-filhas', 'getOusFilhas');
    //     Route::get('/unidade-organizacional/ou-dir-root', 'getOuDirRoot');
    //     Route::post('/unidade-organizacional/ou-dir-root', 'setOuDirRoot');
    //     Route::get('/unidade-organizacional/all', 'all');
    //     Route::resource('unidade-organizacional', UnidadeOrganizacionalController::class);
    // });

    // //Grupo de rotas para a classe PessoasEstatusLotacaoController
    // Route::controller(PessoasEstatusLotacaoController::class)->group(function(){
    //     Route::get('/formulario-pessoas-estatus-lotacao', 'index');
    //     Route::get('/formulario-pessoas-estatus-lotacao/estatus', 'estatusList');
    //     Route::post('/formulario-pessoas-estatus-lotacao/lotacoes', 'lotacoesList');
    //     Route::get('/formulario-pessoas-estatus-lotacao/lotacoes-full', 'lotacoesFullList');
    //     Route::post('/formulario-pessoas-estatus-lotacao/faculdades', 'faculdadesList');
    //     Route::post('/formulario-pessoas-estatus-lotacao/cursos-faculdade', 'cursosFaculdadeList');
    //     Route::post('/formulario-pessoas-estatus-lotacao/academico', 'getDadosAcademico');
    //     Route::post('/formulario-pessoas-estatus-lotacao/funcionario', 'getDadosFuncionarios');
    // });

    //Grupo de rotas para a classe UsuarioController
    Route::controller(UserController::class)->group(function(){
        Route::get('/usuarios/lista', 'all');
        Route::get('/logado', 'usuarioLogado');
        Route::resource('usuarios', UserController::class);
    });

    // //Grupo de rotas para a classe LogsController
    // Route::controller(LogsController::class)->group(function(){
    //     Route::get('/logs/exportacao-estudantes/{arquivo?}', 'exportacaoEstudantes');
    //     Route::get('/logs', 'index');
    // });

    // //Grupo de rotas para a classe WebServicesController
    // Route::controller(WebServicesController::class)->group(function(){
    //     Route::post('/usuario-cartao', 'consultaDadosCartao');
    //     Route::get('/estudantes-grupo-lotes', 'exportaEstudantesGrupoLotes');
    // });

    // Route::get('/est/{periodoLetivoId}', [PlDisciplinaAcademico::class, 'limpaDisciplinas']);



    // //->>>aletar as funções abaixo para a classe User controller
    // Route::get('/formulario-insere-usuarios', [ServidoresMoodleController::class, 'formulariosIndex']);
    // Route::post('/formulario-insere-usuarios', [ServidoresMoodleController::class, 'exportarEstudantes']);

    // //Route::get('/sigecad/{codigoDisciplina}/{periodoLetivoKey}/{turmaKey}', 'TesteController@sigecad');
    // Route::get('/teste', [TesteController::class, 'down']);

    Route::get('/css/{param1}', function ($param1) {
        $str = preg_replace('/\.[a-z0-9]*\./', '.', $param1);
        return Response::download("js/angular/" . $str);
    })->where('param1', '(primeicons.+|color.+|hue.+)');
    Route::get('/{param2}', function ($param2) {
        return Response::download("js/angular/" . $param2);
    })->where('param2', '(open-sans-v15-latin.+|primeicons.+)');
});
// Fim grupo de rotas autentidadas
