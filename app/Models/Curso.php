<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class Curso.
 *
 * @package namespace App\Models;
 */
class Curso extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    protected $table = 'cursos';

    protected $fillable = [
        'nome',
        'auto_increment_ref',
        'faculdade_id',
        'curso_key',
        'ativo'
    ];

    protected $visible = [
        'id',
        'nome',
        'auto_increment_ref',
        'faculdade_id',
        'curso_key',
        'ativo'
    ];

    public function faculdade()
    {
        return $this->belongsTo('App\Faculdade');
    }

     // Eventos que acionam o log
     protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Curso foi {$eventName}") // descrição do evento
        ->useLogName('Cursos') // nome do evento
        ->logOnly(['id', 'nome', 'auto_increment_ref', 'faculdade_id', 'curso_key', 'ativo']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }
}
