<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(\App\Repositories\UserRepository::class, \App\Repositories\UserRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\SalaRepository::class, \App\Repositories\SalaRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\ConfiguracoesRepository::class, \App\Repositories\ConfiguracoesRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PeriodoLetivoRepository::class, \App\Repositories\PeriodoLetivoRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\SigecadRepository::class, \App\Repositories\SigecadRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PeriodoLetivoCategoriaRepository::class, \App\Repositories\PeriodoLetivoCategoriaRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\FaculdadeRepository::class, \App\Repositories\FaculdadeRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\CursoRepository::class, \App\Repositories\CursoRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\UnidadeOrganizacionalRepository::class, \App\Repositories\UnidadeOrganizacionalRepositoryEloquent::class);
        //:end-bindings:
    }
}
