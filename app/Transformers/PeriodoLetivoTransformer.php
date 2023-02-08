<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\PeriodoLetivo;

/**
 * Class PeriodoLetivoTransformer.
 *
 * @package namespace App\Transformers;
 */
class PeriodoLetivoTransformer extends TransformerAbstract
{
    /**
     * Transform the PeriodoLetivo entity.
     *
     * @param \App\Models\PeriodoLetivo $model
     *
     * @return array
     */
    public function transform(PeriodoLetivo $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
