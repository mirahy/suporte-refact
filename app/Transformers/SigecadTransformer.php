<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Sigecad;

/**
 * Class SigecadTransformer.
 *
 * @package namespace App\Transformers;
 */
class SigecadTransformer extends TransformerAbstract
{
    /**
     * Transform the Sigecad entity.
     *
     * @param \App\Models\Sigecad $model
     *
     * @return array
     */
    public function transform(Sigecad $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
