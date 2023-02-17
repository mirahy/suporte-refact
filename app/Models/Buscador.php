<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class Buscador.
 *
 * @package namespace App\Models;
 */
class Buscador extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    const BUSCADOR_NOME_SALA = "NOME_SALA";
    const BUSCADOR_NOME_PROFESSOR = "NOME_PROFESSOR";
    const BUSCADOR_SENHA_ALUNO = "SENHA_ALUNO";
    const BUSCADOR_SENHA_PROFESSOR = "SENHA_PROFESSOR";
    const BUSCADOR_EMAIL = "EMAIL";
    const BUSCADOR_FACULDADE = "FACULDADE";
    const BUSCADOR_CURSO = "CURSO";
    const BUSCADOR_PROVAO_ID = "PROVAO_ID";
    const BUSCADOR_TIMESTAMP_CORRENTE = "TIMESTAMP_CORRENTE";

    public static function getEntradasBuscadores() {
        return [
            self::BUSCADOR_NOME_SALA,
            self::BUSCADOR_NOME_PROFESSOR,
            self::BUSCADOR_SENHA_ALUNO,
            self::BUSCADOR_SENHA_PROFESSOR,
            self::BUSCADOR_EMAIL,
            self::BUSCADOR_FACULDADE,
            self::BUSCADOR_CURSO,
            self::BUSCADOR_PROVAO_ID,
            self::BUSCADOR_TIMESTAMP_CORRENTE,
        ];
    }
    
    protected $table = 'buscadores';

    protected $fillable = [
        'id',
        'chave',
        'entrada',
        'macro_id'
    ];
    protected $visible =  [
        'id',
        'chave',
        'entrada'
    ];

    /*protected $appends = array('macro');
    public function getMacroAttribute($value) {
        return Macro::find($this->macro_id);
    }
    public function setMacroAttribute($value) {
        $this->macro_id = $value->id;
    }*/
    
    /*
    * Muitos para um
    */
    
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
        ->setDescriptionForEvent(fn(string $eventName) => "Buscador foi {$eventName}") // descrição do evento
        ->useLogName('Buscadores') // nome do evento
        ->logOnly(['id', 'chave', 'entrada']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }

}
