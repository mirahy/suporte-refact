<?php

namespace App\Presenters;

use App\Transformers\PeriodoLetivoCategoriaTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class PeriodoLetivoCategoriaPresenter.
 *
 * @package namespace App\Presenters;
 */
class PeriodoLetivoCategoriaPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new PeriodoLetivoCategoriaTransformer();
    }
}
