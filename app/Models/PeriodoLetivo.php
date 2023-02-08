<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class PeriodoLetivo.
 *
 * @package namespace App\Models;
 */
class PeriodoLetivo extends Model implements Transformable
{
    use TransformableTrait, SoftDeletes;

    protected $table = 'periodo_letivos';

    protected $fillable = [
        'nome',
        'id_sigecad',
        'descricao',
        'sufixo',
        'inicio_auto_increment',
        'ativo'
    ];

    protected $visible = [
        'id',
        'nome',
        'id_sigecad',
        'descricao',
        'sufixo',
        'inicio_auto_increment',
        'ativo'
    ];
    
}
