<?php

namespace App\Presenters;

use App\Transformers\ConfiguracoesTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ConfiguracoesPresenter.
 *
 * @package namespace App\Presenters;
 */
class ConfiguracoesPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ConfiguracoesTransformer();
    }
}
