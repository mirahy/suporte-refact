<?php

namespace App\Presenters;

use App\Transformers\PeriodoLetivoTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class PeriodoLetivoPresenter.
 *
 * @package namespace App\Presenters;
 */
class PeriodoLetivoPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new PeriodoLetivoTransformer();
    }
}
