<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PeriodoLetivoCategoriaRepository;
use App\Models\PeriodoLetivoCategoria;
use App\Validators\PeriodoLetivoCategoriaValidator;

/**
 * Class PeriodoLetivoCategoriaRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class PeriodoLetivoCategoriaRepositoryEloquent extends BaseRepository implements PeriodoLetivoCategoriaRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PeriodoLetivoCategoria::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return PeriodoLetivoCategoriaValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
