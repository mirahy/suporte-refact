<?php

namespace App\Presenters;

use App\Transformers\UnidadeOrganizacionalTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class UnidadeOrganizacionalPresenter.
 *
 * @package namespace App\Presenters;
 */
class UnidadeOrganizacionalPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new UnidadeOrganizacionalTransformer();
    }
}
