<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ConfiguracoesRepository;
use App\Models\Configuracoes;
use App\Validators\ConfiguracoesValidator;

/**
 * Class ConfiguracoesRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class ConfiguracoesRepositoryEloquent extends BaseRepository implements ConfiguracoesRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Configuracoes::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ConfiguracoesValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
