<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class SuperMacro.
 *
 * @package namespace App\Models;
 */
class SuperMacro extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    protected $table = 'super_macros';

    protected $fillable = [
        'descricao',
        //'periodo_letivo_id',
        'macro_padrao_id'
    ];

    protected $visible =  [
        'id',
        'descricao',
        //'periodo_letivo_id',
        'macro_padrao_id',
    ];
 
    public function macroPadrao() {
        return $this->belongsTo('App\Macro','macro_padrao_id');
    }
    /*public function periodoLetivo()
    { 
        return $this->belongsTo('App\PeriodoLetivo');
    }*/

    // Eventos que acionam o log
    protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Super Macro foi {$eventName}") // descrição do evento
        ->useLogName('SuperMacros') // nome do evento
        ->logOnly([ 'id', 'descricao', 'macro_padrao_id',]) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios
    }

}
