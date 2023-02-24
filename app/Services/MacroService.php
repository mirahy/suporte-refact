<?

namespace App\Services;


use App\Http\Controllers\MessagesController;
use App\Models\Buscador;
use App\Models\Configuracoes;
use App\Models\Macro;
use App\Models\Sala;
use App\Models\SalaGenerica;
use App\Models\SalaOld;
use App\Repositories\BuscadorRepository;
use App\Repositories\ConfiguracoesRepository;
use App\Repositories\MacroRepository;
use App\Repositories\SuperMacroRepository;
use App\Validators\MacroValidator;
use CURLFile;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Phar;
use PharData;

class MacroService
{
    const CAMINHO_STORAGE_PADRAO = "../storage/app";
    const STORAGE_ARQUIVOS = "public";

    private $repository;
    private $validator;
    private $buscadorRepository;
    private $superMacroRepository;
    private $periodoLetivoService;
    private $configuracoesRepository;
    private $exceptionMessagesController;


    public function __construct(
        MacroRepository             $repository,
        MacroValidator              $validator,
        BuscadorRepository          $buscadorRepository,
        SuperMacroRepository        $superMacroRepository,
        PeriodoLetivoService        $periodoLetivoService,
        ConfiguracoesRepository     $configuracoesRepository,
        MessagesController          $exceptionMessagesController
    ) {
        $this->repository                   = $repository;
        $this->validator                    = $validator;
        $this->buscadorRepository           = $buscadorRepository;
        $this->superMacroRepository         = $superMacroRepository;
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
            'emailSuporte' => $emailSuporte->valor,
            'periodoLetivos' => $this->periodoLetivoService->all(),
            'superMacros' => $this->superMacroRepository->all(),
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
            'emailSuporte' => $emailSuporte->valor,
            'periodoLetivos' => $this->periodoLetivoService->all(),
            'superMacros' => $this->superMacroRepository->all(),
            'arquivoSaida' => $arquivoSaida->valor,
            'idPeriodoLetivoPadrao' => $idPeriodoLetivoPadrao->valor,
            'idSuperMacroPadrao' => $idSuperMacroPadrao->valor,
            'sufixoNomeSala' => $sufixoNomeSala->valor,
            'regexLiberados' => $regexLiberados->valor,
            'aviso' => 'Configurações Atualizadas!'
        ]);
    }

    public function getEntradasBuscadores()
    {
        return $this->buscadorRepository->getEntradasBuscadores();
    }

    public function all()
    {
        return $this->repository->all();
    }

    public function buscadores()
    {
        return $this->buscadorRepository->all();
    }

    public function getBuscadores($macroId)
    {
        return $this->buscadorRepository->findByField('macro_id', $macroId)->get();
    }

    public function addSetBuscador(Request $request, $macroId)
    {
        $macroSelecionada = $this->repository->find($macroId);
        if (!$macroSelecionada)
            abort(400, "Uma macro precisa estar selecionada");
        $buscId = $request->input('id');
        $buscador = null;
        if ($buscId) {
            $buscador = $this->buscadorRepository->find($buscId);
        } else {
            $buscador = new Buscador();
            $buscador->macro_id = $macroId;
        }
        if (!$buscador) {
            abort(400, "Buscador inválido!");
        }
        $buscador->chave = $request->input('chave');
        $buscador->entrada = $request->input('entrada');
        $buscador->save();
        return $buscador;
    }

    public function delBuscador($buscadorId)
    {
        $buscador = $this->buscadorRepository->find($buscadorId);
        if (!$buscador) {
            abort(400, "Buscador inválido!");
        }
        $buscador->delete();
        return "true";
    }

    public function createUpdate(Request $request)
    {
        $macroSelecionada = $this->repository->find($request->input('id'));
        $nome = $request->input('nome');
        if ($nome == null)
            abort(400, "Um nome deve ser Informado!");
        $periodo_letivo_id = $request->input('periodo_letivo_id');
        if ($periodo_letivo_id == null)
            abort(400, "Um Período Letivo deve ser Informado!");
        $link_servidor_moodle = $request->input('link_servidor_moodle');
        if ($link_servidor_moodle == null)
            abort(400, "Um Link deve ser Informado!");
        if ($macroSelecionada == null) {
            $macroSelecionada = new Macro();
        }
        try {
            $macroSelecionada->nome = $nome;
            $macroSelecionada->periodo_letivo_id = $periodo_letivo_id;
            $macroSelecionada->link_servidor_moodle = $link_servidor_moodle;
            $macroSelecionada->save();
            return $macroSelecionada;
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function delete($id)
    {
        $macroSelecionada =  $this->repository->find($id);
        if (count($macroSelecionada->salas) > 0)
            abort(403, "Esta macro não pode ser excluída por haver Salas que dependem desta");
        try {
            $macroSelecionada->delete();
            return $macroSelecionada;
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function listFiles()
    {
        $arrayRemessa = [];

        $files = File::files(self::CAMINHO_STORAGE_PADRAO . "/" . self::STORAGE_ARQUIVOS);
        foreach ($files as $path) {
            $arrayRemessa[] = (object) array("path" => $path->getPathName(), "name" => $path->getFileName(), "created" =>  date("Y-m-d", $path->getCTime()));
        }
        return $arrayRemessa;
    }

    public function download()
    {
        $arrayRemessa = [];
        $files = File::files(self::CAMINHO_STORAGE_PADRAO . '/processados/');
        foreach ($files as $path) {
            $arrayRemessa[] = $path->getPathName();
        }
        return view('download', ['arquivos' =>  $files]);
    }

    public function store(Request $request)
    {
        // Define o valor default para a variável que contém o nome do arquivo 
        $nameFile = null;

        // Verifica se informou o arquivo e se é válido
        if (!$request->arquivo)
            abort(400, "Arquivo de Upload não encontrado");
        if (!$request->file('arquivo')->isValid())
            abort(400, "Arquivo de Upload inválido");

        // Define um aleatório para o arquivo baseado no timestamps atual
        $name = uniqid(date('HisYmd'));

        // recupera o nome original do arquivo enviado, com extensão 
        $originalName =  $request->arquivo->getClientOriginalName();

        // Recupera a extensão do arquivo
        $extension = $request->arquivo->getClientOriginalExtension();

        // remove a extensão do nome original, diminuindo o nome também, caso seja muito grande
        $nameSize = strlen($originalName) - strlen($extension) - 1;
        $originalName =  substr($originalName, 0, $nameSize > 31 ? 31 : $nameSize);


        if ($extension == "php")
            abort(400, "Vá tentar hackear a mãe!");
        /*return redirect()
            ->back()
            ->with('error', 'Vá tentar hackear a mãe!')
            ->withInput();*/

        // Define finalmente o nome
        $nameFile = "{$originalName}-{$name}.{$extension}";
        //$nameFile = "134023201907175d2f2547a55a2.mbz";

        // Faz o upload:
        $upload = $request->arquivo->storeAs(self::STORAGE_ARQUIVOS, $nameFile);

        // Verifica se NÃO deu certo o upload (Redireciona de volta)
        if (!$upload)
            abort(400, "Falha no Upload!");

        try {
            $macroSelecionada = $this->repository->find($request->input('macroId'));
            if ($macroSelecionada) {
                $macroSelecionada->arquivo = $nameFile;
                $macroSelecionada->save();
            }
            return json_encode($nameFile);
            //$this->index();
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function mudarArquivo(Request $request)
    {
        try {
            $macroSelecionada = $this->repository->find($request->input('macroId'));
            $nomeArquivo = $request->input('nomeFile');
            if ($macroSelecionada && $nomeArquivo) {
                $macroSelecionada->arquivo = $nomeArquivo;
                $macroSelecionada->save();
            }
            return $macroSelecionada;
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function executar($salaId, $autorestore)
    {
        $COMANDO_REMOVER_DIRETORIO = strripos(strtoupper(PHP_OS), 'WIN') === 0 ? 'rd /s /q "' . self::CAMINHO_STORAGE_PADRAO . '/temp"' : 'rm -rf ' . self::CAMINHO_STORAGE_PADRAO . '/temp';
        //ini_set('max_execution_time', 180);
        $sala = null;
        $salaGenerica = null;
        if ($salaId instanceof SalaGenerica) {
            $salaGenerica = $salaId;
            $sala = $salaId->getSalaTemp();
        } elseif ($salaId instanceof Sala) {
            $sala = $salaId;
        } else
            $sala = Sala::find($salaId);
        $configSaida = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_ARQUIVO_SAIDA)->first();
        if ($sala == NULL) {
            abort(404, "Dados não encontrados!");
            return;
        }
        if (file_exists(self::CAMINHO_STORAGE_PADRAO . '/temp'))
            exec($COMANDO_REMOVER_DIRETORIO);
        //exec ('tar -xzf storage/'. $sala->macro->arquivo .' -C storage/temp');
        $pharC = new PharData(self::CAMINHO_STORAGE_PADRAO . "/" . self::STORAGE_ARQUIVOS . "/" . $sala->macro->arquivo);
        $pharC->extractTo(self::CAMINHO_STORAGE_PADRAO . '/temp/');

        foreach ($sala->macro->buscadors as $b) {
            $this->execComandoSubstituicao($b, $salaGenerica ? $salaGenerica : $sala);
        }
        //exec ('tar -czf storage/processados/teste.mbz storage/temp/*');
        //exec ('cd storage/temp/
        //tar -czf ../processados/'.$configSaida->valor.' *');
        //tar -czf ../processados/backup-moodle-`date +%Y-%m-%d`.mbz ./*');
        $nameArqTar = self::CAMINHO_STORAGE_PADRAO . '/processados/' . $configSaida->valor . uniqid(date('HisYmd'));
        $pharS = new PharData($nameArqTar . '.mbz');
        $pharS->buildFromDirectory(self::CAMINHO_STORAGE_PADRAO . '/temp');
        $pharS->compress(Phar::GZ);

        if (file_exists(self::CAMINHO_STORAGE_PADRAO . '/processados/' . $configSaida->valor . '.mbz'))
            unlink(self::CAMINHO_STORAGE_PADRAO . '/processados/' . $configSaida->valor . '.mbz');
        rename($nameArqTar . '.tar.gz', self::CAMINHO_STORAGE_PADRAO . '/processados/' . $configSaida->valor . '.mbz');
        unlink($nameArqTar . '.mbz');
        exec($COMANDO_REMOVER_DIRETORIO);

        if ($autorestore)
            return self::CAMINHO_STORAGE_PADRAO . "/processados/" . $configSaida->valor . '.mbz';
        return Response::download(self::CAMINHO_STORAGE_PADRAO . "/processados/" . $configSaida->valor . '.mbz');
        //return $this->download();
    }

    private function execComandoSubstituicao($buscador, $sala)
    {
        $salaGenerica = null;
        if ($sala instanceof SalaGenerica) {
            $salaGenerica = $sala;
            $sala = $sala->getSalaTemp();
        }
        $entrada = "";
        switch ($buscador->entrada) {
            case Buscador::BUSCADOR_NOME_SALA:
                if ($salaGenerica && $salaGenerica->lote_simplificado->sufixo) {
                    $entrada = trim($sala->nome_sala) . " " . trim($salaGenerica->lote_simplificado->sufixo);
                } else
                    $entrada = $sala->nome_sala;
                break;
            case Buscador::BUSCADOR_NOME_PROFESSOR:
                $entrada = $sala->solicitante ? $sala->solicitante->name : "";
                break;
            case Buscador::BUSCADOR_SENHA_ALUNO:
                $entrada = $sala->senha_aluno;
                break;
            case Buscador::BUSCADOR_SENHA_PROFESSOR:
                $entrada = "";
                break;
            case Buscador::BUSCADOR_EMAIL:
                $entrada = $sala->email;
                break;
            case Buscador::BUSCADOR_FACULDADE:
                $entrada = $sala->curso->faculdade->sigla;
                break;
            case Buscador::BUSCADOR_CURSO:
                $entrada = $sala->curso->nome;
                break;
            case Buscador::BUSCADOR_PROVAO_ID:
                $entrada = $salaGenerica ? $salaGenerica->lote_simplificado->sala_provao_id : "";
                break;
            case Buscador::BUSCADOR_TIMESTAMP_CORRENTE:
                $entrada = time();
                break;
            default:
                $entrada = "";
        }

        $caracteres = array("\\", "'", '$', '"', "&", "<", ">");
        $escapes   = array("\\\\", "\\'", '\\$', '\\"', "&amp;", "&lt;", "&gt;");
        $entrada = str_replace($caracteres, $escapes, $entrada);

        $comando =
            'entrada="' . $entrada . '"
            chave="' . $buscador->chave . '"
            find ' . self::CAMINHO_STORAGE_PADRAO . '/temp -type f -exec sed -i "s/$chave/$(echo $entrada | sed -e \'s/\\\\/\\\\\\\\/g; s/\\//\\\\\//g; s/&/\\\\\\&/g\')/g" "{}" \\;';
        //$comando = "find storage/temp -type f -exec sed -i 's/".$buscador->chave."/".$entrada."/g' '{}' \;";

        exec($comando);
    }

    public function executarOld($salaOldId, $autorestore)
    {
        $COMANDO_REMOVER_DIRETORIO = strripos(strtoupper(PHP_OS), 'WIN') === 0 ? 'rd /s /q "' . self::CAMINHO_STORAGE_PADRAO . '/temp"' : 'rm -rf ' . self::CAMINHO_STORAGE_PADRAO . '/temp';
        //ini_set('max_execution_time', 180);
        $salaOld = SalaOld::find($salaOldId);
        $configSaida = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_ARQUIVO_SAIDA)->first();
        if ($salaOld == NULL) {
            abort(404, "Dados não encontrados!");
            return;
        }

        if (file_exists(self::CAMINHO_STORAGE_PADRAO . '/temp'))
            exec($COMANDO_REMOVER_DIRETORIO);
        //exec ('tar -xzf storage/'. $sala->macro->arquivo .' -C storage/temp');
        $pharC = new PharData(self::CAMINHO_STORAGE_PADRAO . "/" . self::STORAGE_ARQUIVOS . "/" . $salaOld->macro->arquivo);
        $pharC->extractTo(self::CAMINHO_STORAGE_PADRAO . '/temp/');

        foreach ($salaOld->macro->buscadors as $b) {
            $this->execComandoSubstituicaoOld($b, $salaOld);
        }
        //exec ('tar -czf storage/processados/teste.mbz storage/temp/*');
        //exec ('cd storage/temp/
        //tar -czf ../processados/'.$configSaida->valor.' *');
        //tar -czf ../processados/backup-moodle-`date +%Y-%m-%d`.mbz ./*');
        $nameArqTar = self::CAMINHO_STORAGE_PADRAO . '/processados/' . $configSaida->valor . uniqid(date('HisYmd'));
        $pharS = new PharData($nameArqTar . '.mbz');
        $pharS->buildFromDirectory(self::CAMINHO_STORAGE_PADRAO . '/temp');
        $pharS->compress(Phar::GZ);

        unlink(self::CAMINHO_STORAGE_PADRAO . '/processados/' . $configSaida->valor . '.mbz');
        rename($nameArqTar . '.tar.gz', self::CAMINHO_STORAGE_PADRAO . '/processados/' . $configSaida->valor . '.mbz');
        unlink($nameArqTar . '.mbz');
        exec($COMANDO_REMOVER_DIRETORIO);

        if ($autorestore)
            return self::CAMINHO_STORAGE_PADRAO . "/processados/" . $configSaida->valor . '.mbz';
        return Response::download(self::CAMINHO_STORAGE_PADRAO . "/processados/" . $configSaida->valor . '.mbz');
        //return $this->download();
    }

    private function execComandoSubstituicaoOld($buscador, $salaOld)
    {
        $entrada = "";
        switch ($buscador->entrada) {
            case Buscador::BUSCADOR_NOME_SALA:
                $entrada = $salaOld->nome_sala;
                break;
            case Buscador::BUSCADOR_NOME_PROFESSOR:
                $entrada = $salaOld->nome_professor;
                break;
            case Buscador::BUSCADOR_SENHA_ALUNO:
                $entrada = $salaOld->senha_aluno;
                break;
            case Buscador::BUSCADOR_SENHA_PROFESSOR:
                $entrada = $salaOld->senha_professor;
                break;
            case Buscador::BUSCADOR_EMAIL:
                $entrada = $salaOld->email;
                break;
            case Buscador::BUSCADOR_FACULDADE:
                $entrada = $salaOld->faculdade;
                break;
            case Buscador::BUSCADOR_CURSO:
                $entrada = $salaOld->curso;
                break;
            case Buscador::BUSCADOR_TIMESTAMP_CORRENTE:
                $entrada = time();
                break;
            default:
                $entrada = "";
        }

        $caracteres = array("\\", "'", '$', '"', "&", "<", ">");
        $escapes   = array("\\\\", "\\'", '\\$', '\\"', "&amp;", "&lt;", "&gt;");
        $entrada = str_replace($caracteres, $escapes, $entrada);

        $comando =
            'entrada="' . $entrada . '"
            chave="' . $buscador->chave . '"
            find ' . self::CAMINHO_STORAGE_PADRAO . '/temp -type f -exec sed -i "s/$chave/$(echo $entrada | sed -e \'s/\\\\/\\\\\\\\/g; s/\\//\\\\\//g; s/&/\\\\\\&/g\')/g" "{}" \\;';
        //$comando = "find storage/temp -type f -exec sed -i 's/".$buscador->chave."/".$entrada."/g' '{}' \;";

        exec($comando);
    }

    public function makeCurlFile($salaId)
    {
        try {
            //$file = 'storage/processados/backup.mbz';
            $file = $this->executar($salaId, true);
            $mime = mime_content_type($file);
            $info = pathinfo($file);
            $name = $info['basename'];
            $output = new CURLFile(realpath($file), $mime, $name);
            return $output;
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
        return null;
    }
}
