<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class Sala.
 *
 * @package namespace App\Models;
 */
class Sala extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'salas';
    protected $fillable = [
        'status_id',
        //'nome_professor',
        'solicitante_id',
        'email',
        //'faculdade',
        //'curso',
        'curso_id',
        'nome_sala',
        'modalidade',
        'objetivo_sala',
        'senha_aluno',
        //'senha_professor',
        'observacao',
        'estudantes',
        'mensagem',
        //'solicitante',
        'periodo_letivo_id',
        'carga_horaria_total_disciplina',
        'avaliacao',
        'turma_nome',
        'turma_id',
        'periodo_letivo_key',
        //'curso_key',
        'disciplina_key',
        'macro_id',
        'sala_moodle_id',
        'lote_salas_id',
    ];

    protected $visible =  [
        'id',
        'nome_professor',
        //'solicitante_id',
        'email',
        //'faculdade',
        //'curso',
        'curso_id',
        'nome_sala',
        'modalidade',
        'objetivo_sala',
        'senha_aluno',
        //'senha_professor',
        'observacao',
        'status',
        'estudantes',
        'mensagem',
        'periodo_letivo_id',
        'carga_horaria_total_disciplina',
        'avaliacao',
        'turma_nome',
        'turma_id',
        'periodo_letivo_key',
        //'curso_key',
        'disciplina_key',
        'macro_id',
        'sala_moodle_id',
        'lote_salas_id',
        'created_at'
    ];

    protected $appends = array('status', 'nome_professor'/*,'periodo_letivo_id'*/);

    // Eventos que acionam o log
    protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Sala foi {$eventName}") // descrição do evento
        ->useLogName('Sala') // nome do evento
        ->logOnly(['id', 'nome_professor', 'email', 'curso_id', 'nome_sala', 'modalidade', 'objetivo_sala',
                   'senha_aluno', 'observacao', 'status', 'estudantes', 'mensagem', 'periodo_letivo_id',
                   'carga_horaria_total_disciplina', 'avaliacao', 'turma_nome', 'turma_id', 'periodo_letivo_key',
                   'disciplina_key', 'macro_id', 'sala_moodle_id', 'lote_salas_id']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }

    public function getStatusAttribute($value)
    {
        return Status::find($this->status_id);
    }

    public function setStatusAttribute($value)
    {
        $this->status_id = $value->id;
    }

    public function getNomeProfessorAttribute($value)
    {
        $u = User::find($this->solicitante_id);
        if ($u)
            return $u->name;
    }
    /*public function getPeriodoLetivoIdAttribute($value) {
    if (!$this->macro_id)
        return 0;
    return $this->macro->periodo_letivo_id;
}*/

    public function macro()
    {
        return $this->belongsTo('App\Macro');
    }

    public function solicitante()
    {
        return $this->belongsTo('App\User', 'solicitante_id');
    }

    public function curso()
    {
        return $this->belongsTo('App\Curso', 'curso_id');
    }

    public function periodoLetivo()
    {
        return $this->belongsTo('App\PeriodoLetivo', 'periodo_letivo_id');
    }

    public function loteSalas()
    {
        return $this->belongsTo('App\LoteSalas', '');
    }

    public function getEstudantesComProfessor()
    {
        $solicitante = $this->solicitante;
        if (!$solicitante)
            return $this->estudantes;
        $ob = json_decode($this->estudantes);
        if (!$ob)
            $ob = [];
        $professor = [$this->solicitante->email, $this->email, $this->solicitante->name, true];
        $ob[] = $professor;
        return json_encode($ob);
    }

    public function getCategoriaId()
    {
        $plc = PeriodoLetivoCategoria::where(['curso_id' => $this->curso_id, 'periodo_letivo_id' => $this->periodo_letivo_id])->first();
        if ($plc && $plc->categoria_id)
            return $plc->categoria_id;
        return null;
    }

    /*public function getPeriodoLetivoId($value) {
    if (!$this->macro_id)
        return 0;
    return Macro::find($this->macro_id)->first()->periodo_letivo_id;
}*/

    /**
     * Prepare a date for array / JSON serialization.
     * Conversão data UTC (2019-12-02T20:01:00.283041Z) para (2019-12-02 20:01:00)
     * @param  \DateTimeInterface  $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
