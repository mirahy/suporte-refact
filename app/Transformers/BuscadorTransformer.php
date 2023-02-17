<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Buscador;

/**
 * Class BuscadorTransformer.
 *
 * @package namespace App\Transformers;
 */
class BuscadorTransformer extends TransformerAbstract
{
    /**
     * Transform the Buscador entity.
     *
     * @param \App\Models\Buscador $model
     *
     * @return array
     */
    public function transform(Buscador $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
