<?php

namespace App\Presenters;

use App\Transformers\SuperMacroTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class SuperMacroPresenter.
 *
 * @package namespace App\Presenters;
 */
class SuperMacroPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new SuperMacroTransformer();
    }
}
