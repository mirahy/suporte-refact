<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class Faculdade.
 *
 * @package namespace App\Models;
 */
class Faculdade extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    protected $table = 'faculdades';


    protected $fillable = [
        'sigla',
        'nome',
        'auto_increment_ref',
        'ativo'
    ];

    protected $visible = [
        'id',
        'sigla',
        'nome',
        'auto_increment_ref',
        'ativo',
        'cursos'
    ];

    protected $appends = array('cursos');
    public function getCursosAttribute($value) {
        return Curso::where('faculdade_id', $this->id)->get();
    }

     // Eventos que acionam o log
     protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Faculdade foi {$eventName}") // descrição do evento
        ->useLogName('Faculdades') // nome do evento
        ->logOnly(['id', 'sigla', 'nome', 'auto_increment_ref', 'ativo', 'cursos']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }

}
