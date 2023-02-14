<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class PeriodoLetivoCategoria.
 *
 * @package namespace App\Models;
 */
class PeriodoLetivoCategoria extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    protected $fillable = [
        'curso_id',
        'periodo_letivo_id',
        'categoria_id'
    ];

    protected $visible = [
        'id',
        'curso_id',
        'periodo_letivo_id',
        'categoria_id'
    ];

    // Eventos que acionam o log
    protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Periodo Letivo Categoria foi {$eventName}") // descrição do evento
        ->useLogName('PeriodoLetivoCategoria') // nome do evento
        ->logOnly(['id', 'curso_id', 'periodo_letivo_id', 'categoria_id']) // alterações nestes atributos serão registrados no log  
        //->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }


    public function curso()
    {
        return $this->belongsTo('App\Curso');
    }

    public function periodoLetivo()
    {
        return $this->belongsTo('App\PeriodoLetivo');
    }


}
