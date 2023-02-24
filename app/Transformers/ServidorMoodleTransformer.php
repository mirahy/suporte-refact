<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\ServidorMoodle;

/**
 * Class ServidorMoodleTransformer.
 *
 * @package namespace App\Transformers;
 */
class ServidorMoodleTransformer extends TransformerAbstract
{
    /**
     * Transform the ServidorMoodle entity.
     *
     * @param \App\Models\ServidorMoodle $model
     *
     * @return array
     */
    public function transform(ServidorMoodle $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
