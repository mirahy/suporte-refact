<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class ServidorMoodle.
 *
 * @package namespace App\Models;
 */
class ServidorMoodle extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    protected $table = 'servidores_moodle';

    protected $fillable = [
        'nome',
        'url',
        'ativo',
    ];

    protected $visible = [
        'id',
        'nome',
        'url',
        'ativo',
    ];

     // Eventos que acionam o log
     protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Servidor Moodle foi {$eventName}") // descrição do evento
        ->useLogName('ServidoresMoodle') // nome do evento
        ->logOnly([ 'id', 'nome', 'url', 'ativo']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios
    }

}
