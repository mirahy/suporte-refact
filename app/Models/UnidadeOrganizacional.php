<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class UnidadeOrganizacional.
 *
 * @package namespace App\Models;
 */
class UnidadeOrganizacional extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    protected $table = 'unidades_organizacionais';

    protected $fillable = [
        'nome',
        'valor',
    ];

    protected $visible = [
        'id',
        'nome',
        'valor',
    ];

     // Eventos que acionam o log
     protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Unidade Organizacional foi {$eventName}") // descrição do evento
        ->useLogName('UnidadeOrganizacional') // nome do evento
        ->logOnly(['id', 'nome', 'valor',]) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }

}
