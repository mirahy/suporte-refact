<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\PeriodoLetivoCategoria;

/**
 * Class PeriodoLetivoCategoriaTransformer.
 *
 * @package namespace App\Transformers;
 */
class PeriodoLetivoCategoriaTransformer extends TransformerAbstract
{
    /**
     * Transform the PeriodoLetivoCategoria entity.
     *
     * @param \App\Models\PeriodoLetivoCategoria $model
     *
     * @return array
     */
    public function transform(PeriodoLetivoCategoria $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
