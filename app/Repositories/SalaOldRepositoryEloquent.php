<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\SalaOldRepository;
use App\Models\SalaOld;
use App\Validators\SalaOldValidator;

/**
 * Class SalaOldRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class SalaOldRepositoryEloquent extends BaseRepository implements SalaOldRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return SalaOld::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return SalaOldValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
