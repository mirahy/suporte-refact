<?php

namespace App\Presenters;

use App\Transformers\SigecadTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class SigecadPresenter.
 *
 * @package namespace App\Presenters;
 */
class SigecadPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new SigecadTransformer();
    }
}
