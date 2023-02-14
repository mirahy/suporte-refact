<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\FaculdadeRepository;
use App\Models\Faculdade;
use App\Validators\FaculdadeValidator;

/**
 * Class FaculdadeRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class FaculdadeRepositoryEloquent extends BaseRepository implements FaculdadeRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Faculdade::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return FaculdadeValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
