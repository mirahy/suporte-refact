<?php

namespace App\Presenters;

use App\Transformers\MacroTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MacroPresenter.
 *
 * @package namespace App\Presenters;
 */
class MacroPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MacroTransformer();
    }
}
