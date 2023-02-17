<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Macro;

/**
 * Class MacroTransformer.
 *
 * @package namespace App\Transformers;
 */
class MacroTransformer extends TransformerAbstract
{
    /**
     * Transform the Macro entity.
     *
     * @param \App\Models\Macro $model
     *
     * @return array
     */
    public function transform(Macro $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
