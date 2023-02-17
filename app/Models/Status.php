<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class Status.
 *
 * @package namespace App\Models;
 */
class Status extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    const STATUS_ANALISE = "ANALISE";
    const STATUS_CONCLUIDO = "CONCLUIDO";
    const STATUS_REJEITADO = "REJEITADO";
    const STATUS_DEFERIDO = "DEFERIDO";
    const STATUS_INDEFERIDO = "INDEFERIDO";
    const STATUS_CANCELADO = "CANCELADO";
    const STATUS_PROCESSO = "PROCESSO";

    const STATUS_PADRAO_INICIO = self::STATUS_PROCESSO;
    const STATUS_PADRAO_SUCESSO = self::STATUS_CONCLUIDO;

    protected $table = 'status';
    
    protected $fillable = [
        'chave',
        'descricao',
        'cor'
    ];

    protected $visible = [
        'id',
        'chave',
        'descricao',
        'cor'
    ];

    // Eventos que acionam o log
     protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Status foi {$eventName}") // descrição do evento
        ->useLogName('Status') // nome do evento
        ->logOnly(['id', 'chave', 'descricao', 'cor']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }

}
