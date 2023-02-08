<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Configuracoes;

/**
 * Class ConfiguracoesTransformer.
 *
 * @package namespace App\Transformers;
 */
class ConfiguracoesTransformer extends TransformerAbstract
{
    /**
     * Transform the Configuracoes entity.
     *
     * @param \App\Models\Configuracoes $model
     *
     * @return array
     */
    public function transform(Configuracoes $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
