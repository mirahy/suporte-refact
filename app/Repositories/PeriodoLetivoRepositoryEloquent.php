<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PeriodoLetivoRepository;
use App\Models\PeriodoLetivo;
use App\Validators\PeriodoLetivoValidator;

/**
 * Class PeriodoLetivoRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class PeriodoLetivoRepositoryEloquent extends BaseRepository implements PeriodoLetivoRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PeriodoLetivo::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return PeriodoLetivoValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
