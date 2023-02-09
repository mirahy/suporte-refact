<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\SigecadRepository;
use App\Models\Sigecad;
use App\Validators\SigecadValidator;

/**
 * Class SigecadRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class SigecadRepositoryEloquent extends BaseRepository implements SigecadRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Sigecad::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return SigecadValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
