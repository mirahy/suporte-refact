<?php

namespace App\Presenters;

use App\Transformers\BuscadorTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class BuscadorPresenter.
 *
 * @package namespace App\Presenters;
 */
class BuscadorPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new BuscadorTransformer();
    }
}
