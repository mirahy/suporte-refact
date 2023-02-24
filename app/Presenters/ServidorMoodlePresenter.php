<?php

namespace App\Presenters;

use App\Transformers\ServidorMoodleTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ServidorMoodlePresenter.
 *
 * @package namespace App\Presenters;
 */
class ServidorMoodlePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ServidorMoodleTransformer();
    }
}
