<?php

namespace App\Presenters;

use App\Transformers\FaculdadeTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class FaculdadePresenter.
 *
 * @package namespace App\Presenters;
 */
class FaculdadePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new FaculdadeTransformer();
    }
}
