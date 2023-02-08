<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    const PERMISSAO_ADMINISTRADOR = "ADMINISTRADOR";
    const PERMISSAO_USUARIO = 'USUARIO';
    const PERMISSAO_INATIVO = 'INATIVO';


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
        return $this->belongsToMany('App\Recurso', 'gestores_recursos','user_id','recurso_id');
    }

    public function isAdmin() {
        return $this->permissao == self::PERMISSAO_ADMINISTRADOR;
    }
}
