<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\BuscadorRepository;
use App\Models\Buscador;
use App\Validators\BuscadorValidator;

/**
 * Class BuscadorRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class BuscadorRepositoryEloquent extends BaseRepository implements BuscadorRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Buscador::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return BuscadorValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
