<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class PeriodoLetivo.
 *
 * @package namespace App\Models;
 */
class PeriodoLetivo extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    protected $table = 'periodo_letivos';

    protected $fillable = [
        'nome',
        'id_sigecad',
        'descricao',
        'sufixo',
        'inicio_auto_increment',
        'ativo'
    ];

    protected $visible = [
        'id',
        'nome',
        'id_sigecad',
        'descricao',
        'sufixo',
        'inicio_auto_increment',
        'ativo'
    ];

    // Eventos que acionam o log
    protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Periodo Letivo foi {$eventName}") // descrição do evento
        ->useLogName('PeriodLetivo') // nome do evento
        ->logOnly(['id', 'nome', 'id_sigecad', 'descricao', 'sufixo', 'inicio_auto_increment', 'ativo']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }
    
}
