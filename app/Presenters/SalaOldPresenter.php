<?php

namespace App\Presenters;

use App\Transformers\SalaOldTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class SalaOldPresenter.
 *
 * @package namespace App\Presenters;
 */
class SalaOldPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new SalaOldTransformer();
    }
}
