<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class SalaOld.
 *
 * @package namespace App\Models;
 */
class SalaOld extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    protected $table = 'salas_old';

    protected $fillable = [
        'status_id',
        'nome_professor',
        'email',
        'faculdade',
        'curso',
        'nome_sala',
        'modalidade',
        'objetivo_sala',
        'senha_aluno',
        'senha_professor',
        'observacao',
        'mensagem',
        'macro_id'
    ];

    protected $visible =  [
        'id',
        'nome_professor',
        'email',
        'faculdade',
        'curso',
        'nome_sala',
        'modalidade',
        'objetivo_sala',
        'senha_aluno',
        'senha_professor',
        'observacao',
        'status',
        'mensagem',
        'created_at'
    ];

    protected $appends = array('status');
    public function getStatusAttribute($value) {
        return Status::find($this->status_id);
    }
    public function setStatusAttribute($value) {
        $this->status_id = $value->id;
    }
    
    public function macro()
    {
        return $this->belongsTo('App\Macro');
    }

    // Eventos que acionam o log
    protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "SalaOld foi {$eventName}") // descrição do evento
        ->useLogName('SalaOld') // nome do evento
        ->logOnly(['id', 'nome_professor', 'email', 'faculdade', 'curso',
                   'nome_sala', 'modalidade', 'objetivo_sala', 'senha_aluno',
                   'senha_professor', 'observacao', 'status', 'mensagem',
                   'created_at']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }

}
