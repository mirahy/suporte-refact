<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class Macro.
 *
 * @package namespace App\Models;
 */
class Macro extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    protected $table = 'macros';

    protected $fillable = [
        'nome',
        'arquivo',
        'periodo_letivo_id',
        'link_servidor_moodle',
    ];

    protected $visible =  [
        'id',
        'nome',
        'arquivo',
        'periodo_letivo_id',
        'link_servidor_moodle',
        'buscadores'
    ];

    protected $appends = array('buscadores');
    public function getBuscadoresAttribute($value) {
        return $this->buscadors;
    }
    
     /*
    * Um para muitos
    */
    public function buscadors()
    { 
        return $this->hasMany(Buscador::class);
    }
    /*
    * Um para muitos
    */
    public function salas()
    { 
        return $this->hasMany(Sala::class);
    }

    public function periodoLetivo()
    { 
        return $this->belongsTo('App\PeriodoLetivo');
    }

    // Eventos que acionam o log
    protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Macro foi {$eventName}") // descrição do evento
        ->useLogName('Macros') // nome do evento
        ->logOnly([ 'id', 'nome', 'arquivo', 'periodo_letivo_id', 'link_servidor_moodle', 'buscadores']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }

}
