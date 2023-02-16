<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\UnidadeOrganizacionalRepository;
use App\Models\UnidadeOrganizacional;
use App\Validators\UnidadeOrganizacionalValidator;

/**
 * Class UnidadeOrganizacionalRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class UnidadeOrganizacionalRepositoryEloquent extends BaseRepository implements UnidadeOrganizacionalRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return UnidadeOrganizacional::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return UnidadeOrganizacionalValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
