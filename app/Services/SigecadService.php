<?

namespace App\Services;

use App\Http\Controllers\DbController;
use App\Repositories\SigecadRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SigecadService
{
    private $connectDb;

    const DBCONN_SUPORTE = 'suporte_db';
    const DBCONN_SIGECAD = 'sigcad_db';

    const DBCONN_DISCIPLINAS_VIEW = "secretaria.disciplinas_para_moodle";
    const DBCONN_ACADEMICOS_VIEW = "secretaria.disciplinas_academicos_para_moodle";
    const DBCONN_CARTOES_VIEW = "secretaria.cartoes_para_moodle";
    const DBCONN_PESSOAS_VIEW = "public.pessoas_view";

    const DBCONN_KEYFIELD = "username";

    const NOME_QUERY = "query_sigecad";

    const COLUNA_SIGLA_FACULDADE = "sigla_faculdade";
    const COLUNA_NOME_FACULDADE = "nome_faculdade";
    const COLUNA_NOME_CURSO = "nome_curso";
    const COLUNA_NOME_ALUNO = "nome_aluno";
    const COLUNA_NOME_DISCIPLINA = "nome_disciplina";
    const COLUNA_CODIGO_CURSO = "codigo_curso";
    const COLUNA_CODIGO_DISCIPLINA = "codigo_disciplina";
    const COLUNA_USERNAME_ALUNO = "username_aluno";
    const COLUNA_EMAIL_ALUNO = "email_do_aluno";
    const COLUNA_PERIODO_LETIVO_ID = "periodo_letivo_id";
    const COLUNA_PERIODO_LETIVO = "periodo_letivo";
    const COLUNA_CARGA_HORARIA_DISCIPMINA = "carga_horaria_total_disciplina";
    const COLUNA_NOME_PROFESSOR = "nome_professor";
    const COLUNA_USERNAME_PROFESSOR = "username_professor";
    const COLUNA_CPF_PROFESSOR = "cpf_professor";
    const COLUNA_AVALIACAO = "avaliacao";
    const COLUNA_TURMA_ID = "turma_id";
    const COLUNA_TURMA_NOME = "turma_nome";
    const COLUNA_GRUPO = "grupo";

    const COLUNA_BUSCA_CARTAO = "cpf";
    const COLUNA_NUMERO_CARTAO = "numero_cartao";
    const COLUNA_ESTADO_CARTAO = "estado_cartao";
    const COLUNA_ESTATUS_PESSOA_CARTAO = "tipo_estatus_nome";

    const COLUNA_NOME_PESSOA = "nome";
    const COLUNA_DOCUMENTO_PESSOA = "documento";
    const COLUNA_LOGIN_PESSOA = "login";
    const COLUNA_TIPO_ESTATUS_PESSOA = "tipo_estatus_nome";
    const COLUNA_TIPO_PESSOA = "tipo_pessoa";
    const COLUNA_ATIVO_PESSOA = "ativo";
    const COLUNA_EMAIL_PESSOA = "email";
    const COLUNA_EMAIL_ALTERNATIVO_PESSOA = "email_alternativo";
    const COLUNA_LOTACAO_PESSOA = "lotacao";
    const COLUNA_FACULDADE_PESSOA = "faculdade";


    public function __construct(
        DbController $connectDb
    ) {
        $this->connectDb    = $connectDb;
    }


    public function getPeriodoLetivoList(Request $request)
    {
        // Setando 'sigcad_db' como default e abrindo conexão
        $this->connectDb->connect('' . self::DBCONN_SIGECAD);
        // realizando consulta
        $result = DB::table(self::DBCONN_DISCIPLINAS_VIEW)
            ->select([self::COLUNA_PERIODO_LETIVO_ID . " AS id_sigecad", self::COLUNA_PERIODO_LETIVO . " AS nome"])
            ->groupBy([self::COLUNA_PERIODO_LETIVO_ID, self::COLUNA_PERIODO_LETIVO])
            ->get();
        // Encerrando conexão 'sigcad_db'
        $this->connectDb->close('' . self::DBCONN_SIGECAD);

        return json_decode($result);
    }
}
