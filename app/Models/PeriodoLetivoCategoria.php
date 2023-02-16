<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;


/**
 * Class PeriodoLetivoCategoria.
 *
 * @package namespace App\Models;
 */
class PeriodoLetivoCategoria extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'periodo_letivos_categorias';

    protected $fillable = [
        'curso_id',
        'periodo_letivo_id',
        'categoria_id'
    ];

    protected $visible = [
        'id',
        'curso_id',
        'periodo_letivo_id',
        'categoria_id'
    ];


    public function curso()
    {
        return $this->belongsTo('App\Curso');
    }

    public function periodoLetivo()
    {
        return $this->belongsTo('App\PeriodoLetivo');
    }


}
