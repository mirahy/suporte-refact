<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ServidorMoodleRepository;
use App\Models\ServidorMoodle;
use App\Validators\ServidorMoodleValidator;

/**
 * Class ServidorMoodleRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class ServidorMoodleRepositoryEloquent extends BaseRepository implements ServidorMoodleRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ServidorMoodle::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ServidorMoodleValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
