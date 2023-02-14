<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * Class Configuracoes.
 *
 * @package namespace App\Models;
 */
class Configuracoes extends Model implements Transformable
{
    use TransformableTrait, LogsActivity;

    const CONFIGURACAO_ARQUIVO_SALA_PADRAO = "ARQUIVO_SALA_PADRAO";
    const CONFIGURACAO_ARQUIVO_SAIDA = "ARQUIVO_SAIDA";
    const CONFIGURACAO_PERIODO_LETIVO_PADRAO = "PERIODO_LETIVO_PADRAO";
    const CONFIGURACAO_SUPER_MACRO_PADRAO = "SUPER_MACRO_PADRAO";
    const CONFIGURACAO_EMAIL_SUPORTE = "EMAIL_SUPORTE";
    const CONFIGURACAO_SEPARADOR_EMAIL = "SEPARADOR_EMAIL";
    const CONFIGURACAO_SUFIXO_NOME_SALA = "SUFIXO_NOME_SALA";
    const CONFIGURACAO_REGEX_EMAILS_LIBERADOS = "REGEX_EMAILS_LIBERADOS";
    const CONFIGURACAO_TIMEZONE = "TIMEZONE";

    const CONFIGURACAO_OU_ROOT_DIR = "OU_ROOT_DIR";
    const CONFIGURACAO_AD_COMPANY = "AD_COMPANY";
    const CONFIGURACAO_AD_DEPARTMENT= "AD_DEPARTMENT";
    const CONFIGURACAO_AD_USER_PRINCIPAL_NAME_SUFIXO = "AD_USER_PRINCIPAL_NAME_SUFIXO";
    const CONFIGURACAO_AD_EMAIL_PADRAO_SUFIXO = "AD_EMAIL_PADRAO_SUFIXO";

    protected $fillable = [
        'nome',
        'valor'
    ];

    protected $visible =  [
        'nome',
        'valor'
    ];

    // Eventos que acionam o log
    protected static $recordEvents = [
        'created', 'updated', 'deleted'
    ];
   
    // Função para registrar log
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->setDescriptionForEvent(fn(string $eventName) => "Configuracões foi {$eventName}") // descrição do evento
        ->useLogName('Configuracoes') // nome do evento
        ->logOnly(['nome', 'valor']) // alterações nestes atributos serão registrados no log  
        // ->dontLogIfAttributesChangedOnly([]) // atributos que não devem gerar log
        ->logOnlyDirty() // registrar somente os atributos que foram alterados
        ->dontSubmitEmptyLogs(); //impede que o pacote armazene logs vazios

    }
}
