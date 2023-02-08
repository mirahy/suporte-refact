<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class SalaValidator.
 *
 * @package namespace App\Validators;
 */
class SalaValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'nome_sala'         => 'required',
            'email'             => 'required|email',
            'curso'             => 'required',
            //'nome_professor'    => 'required',
            //'senha_professor'   => 'required'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'nome_sala'         => 'required',
            'email'             => 'required|email',
            'curso'             => 'required',
            //'nome_professor'    => 'required',
            //'senha_professor'   => 'required'
        ],
    ];

    protected $menssages = [
        'nome_sala'      => 'Nome da sala é obrigatório.',
        'email.required' => 'Email é obrigatório.',
        'email.email'    => 'formato de email inválido.',
        'curso'          => 'Curso é obrigatório.'
    ];
    
}
