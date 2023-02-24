<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\SuperMacroRepository;
use App\Models\SuperMacro;
use App\Validators\SuperMacroValidator;

/**
 * Class SuperMacroRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class SuperMacroRepositoryEloquent extends BaseRepository implements SuperMacroRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return SuperMacro::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return SuperMacroValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
