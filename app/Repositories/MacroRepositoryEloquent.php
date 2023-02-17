<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\MacroRepository;
use App\Models\Macro;
use App\Validators\MacroValidator;

/**
 * Class MacroRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class MacroRepositoryEloquent extends BaseRepository implements MacroRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Macro::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return MacroValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
