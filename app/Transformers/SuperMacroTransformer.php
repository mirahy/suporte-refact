<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\SuperMacro;

/**
 * Class SuperMacroTransformer.
 *
 * @package namespace App\Transformers;
 */
class SuperMacroTransformer extends TransformerAbstract
{
    /**
     * Transform the SuperMacro entity.
     *
     * @param \App\Models\SuperMacro $model
     *
     * @return array
     */
    public function transform(SuperMacro $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
