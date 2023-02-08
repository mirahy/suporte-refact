<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Class User.
 *
 * @package namespace App\Models;
 */
class User extends  Authenticatable implements Transformable
{
    use TransformableTrait, HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    const PERMISSAO_ADMINISTRADOR = "ADMINISTRADOR";
    const PERMISSAO_USUARIO = 'USUARIO';
    const PERMISSAO_INATIVO = 'INATIVO';

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'permissao'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * muitos para muitos
     */
    public function gestorRecursos()
    {
        return $this->belongsToMany('App\Recurso', 'gestores_recursos', 'user_id', 'recurso_id');
    }

    public function isAdmin()
    {
        return $this->permissao == self::PERMISSAO_ADMINISTRADOR;
    }
}
