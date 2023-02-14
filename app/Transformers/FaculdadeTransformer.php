<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Faculdade;

/**
 * Class FaculdadeTransformer.
 *
 * @package namespace App\Transformers;
 */
class FaculdadeTransformer extends TransformerAbstract
{
    /**
     * Transform the Faculdade entity.
     *
     * @param \App\Models\Faculdade $model
     *
     * @return array
     */
    public function transform(Faculdade $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
