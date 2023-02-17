<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\SalaOld;

/**
 * Class SalaOldTransformer.
 *
 * @package namespace App\Transformers;
 */
class SalaOldTransformer extends TransformerAbstract
{
    /**
     * Transform the SalaOld entity.
     *
     * @param \App\Models\SalaOld $model
     *
     * @return array
     */
    public function transform(SalaOld $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
