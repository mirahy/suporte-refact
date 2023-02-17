<?

namespace App\Services;


use App\Http\Controllers\MessagesController;
use App\Models\Buscador;
use App\Models\Configuracoes;
use App\Repositories\BuscadorRepository;
use App\Repositories\ConfiguracoesRepository;
use App\Repositories\MacroRepository;
use App\Validators\MacroValidator;
use Illuminate\Http\Request;

class MacroService
{
    const CAMINHO_STORAGE_PADRAO = "../storage/app";
    const STORAGE_ARQUIVOS = "public";

    private $repository;
    private $validator;
    private $buscadorRepository;
    private $periodoLetivoService;
    private $configuracoesRepository;
    private $exceptionMessagesController;


    public function __construct(
        MacroRepository             $repository,
        MacroValidator              $validator,
        BuscadorRepository          $buscadorRepository,
        PeriodoLetivoService        $periodoLetivoService,
        ConfiguracoesRepository     $configuracoesRepository,
        MessagesController          $exceptionMessagesController
    ) {
        $this->repository                   = $repository;
        $this->validator                    = $validator;
        $this->buscadorRepository           = $buscadorRepository;
        $this->periodoLetivoService         = $periodoLetivoService;
        $this->configuracoesRepository      = $configuracoesRepository;
        $this->exceptionMessagesController  = $exceptionMessagesController;
    }

    public function config()
    {
        $arquivoSaida = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_ARQUIVO_SAIDA)->first();
        $sufixoNomeSala = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_SUFIXO_NOME_SALA)->first();
        $idPeriodoLetivoPadrao = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_PERIODO_LETIVO_PADRAO)->first();
        $emailSuporte = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_EMAIL_SUPORTE)->first();
        $idSuperMacroPadrao = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_SUPER_MACRO_PADRAO)->first();
        $regexLiberados = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_REGEX_EMAILS_LIBERADOS)->first();
        return view('config.geral', [
            'emailSuporte'=> $emailSuporte->valor, 
            'periodoLetivos' => $this->periodoLetivoService->all(),
            'superMacros' => SuperMacro::all(), 
            'arquivoSaida' => $arquivoSaida->valor,  
            'idPeriodoLetivoPadrao' => $idPeriodoLetivoPadrao->valor, 
            'idSuperMacroPadrao' => $idSuperMacroPadrao->valor, 
            'sufixoNomeSala' => $sufixoNomeSala->valor,
            'regexLiberados' => $regexLiberados->valor
        ]);
    }

    public function updateConfig($request)
    {
        $arquivoSaida = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_ARQUIVO_SAIDA)->first();
        $sufixoNomeSala = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_SUFIXO_NOME_SALA)->first();
        $idPeriodoLetivoPadrao = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_PERIODO_LETIVO_PADRAO)->first();
        $emailSuporte = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_EMAIL_SUPORTE)->first();
        $idSuperMacroPadrao = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_SUPER_MACRO_PADRAO)->first();
        $regexLiberados = $this->configuracoesRepository->findByField('nome', Configuracoes::CONFIGURACAO_REGEX_EMAILS_LIBERADOS)->first();
        $arquivoSaida->valor = $request->input('arquivo-saida');
        $arquivoSaida->save();
        $sufixoNomeSala->valor = $request->input('sufixo-nome-sala') ? $request->input('sufixo-nome-sala') : "";
        $sufixoNomeSala->save();
        $emailSuporte->valor = $request->input('email-suporte');
        $emailSuporte->save();
        $idPeriodoLetivoPadrao->valor = $request->input('periodo-letivo-padrao') ? $request->input('periodo-letivo-padrao') : "";
        $idPeriodoLetivoPadrao->save();
        $idSuperMacroPadrao->valor = $request->input('super-macro-padrao');
        $idSuperMacroPadrao->save();
        $regexLiberados->valor = $request->input('regex-liberados');
        $regexLiberados->save();
        return view('config.geral', [
            'emailSuporte'=> $emailSuporte->valor, 
            'periodoLetivos' => $this->periodoLetivoService->all(),
            'superMacros' => SuperMacro::all(), 
            'arquivoSaida' => $arquivoSaida->valor, 
            'idPeriodoLetivoPadrao' => $idPeriodoLetivoPadrao->valor, 
            'idSuperMacroPadrao' => $idSuperMacroPadrao->valor, 
            'sufixoNomeSala' => $sufixoNomeSala->valor, 
            'regexLiberados' => $regexLiberados->valor,
            'aviso' => 'Configurações Atualizadas!'
        ]);
    }

    public function getEntradasBuscadores ()
    {
        return $this->buscadorRepository->getEntradasBuscadores();
    }

    public function all () 
    {
        return $this->repository->all();
    }

    public function buscadores ()
    {
        return $this->buscadorRepository->all();
    }

    public function getBuscadores($macroId)
    {
        return $this->buscadorRepository->findByField('macro_id', $macroId)->get();
    }

    public function addSetBuscador (Request $request, $macroId)
    {
        $macroSelecionada = $this->repository->find($macroId);
        if (!$macroSelecionada)
            abort(400,"Uma macro precisa estar selecionada");
        $buscId = $request->input('id');
        $buscador = null;
        if ($buscId) {
            $buscador = $this->buscadorRepository->find($buscId);
        }
        else {
            $buscador = new Buscador();
            $buscador->macro_id = $macroId;
        }
        if (!$buscador) {
            abort (400, "Buscador inválido!");
        }
        $buscador->chave = $request->input('chave');
        $buscador->entrada = $request->input('entrada');
        $buscador->save();
        return $buscador;
    }

    public function delBuscador ($buscadorId)
    {
        $buscador = $this->buscadorRepository->find($buscadorId);
        if (!$buscador) {
            abort (400, "Buscador inválido!");
        }
        $buscador->delete();
        return "true";
    }

}