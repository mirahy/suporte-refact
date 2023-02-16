<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\UnidadeOrganizacional;

/**
 * Class UnidadeOrganizacionalTransformer.
 *
 * @package namespace App\Transformers;
 */
class UnidadeOrganizacionalTransformer extends TransformerAbstract
{
    /**
     * Transform the UnidadeOrganizacional entity.
     *
     * @param \App\Models\UnidadeOrganizacional $model
     *
     * @return array
     */
    public function transform(UnidadeOrganizacional $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
