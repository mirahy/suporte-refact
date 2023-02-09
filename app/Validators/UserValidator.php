<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class UserValidator.
 *
 * @package namespace App\Validators;
 */
class UserValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'name'        => 'required',
            'email'       => 'required',
            // 'email'       => 'required|email',
            //'permissao'   => 'required|permissao',
        ],
        ValidatorInterface::RULE_UPDATE => [
            'name'        => 'required',
            'email'       => 'required',
            // 'email'       => 'required|email',
            //'permissao'   => 'required|permissao',
        ],
    ];

    protected $messages = [
        'name'          =>  'Nome é obrigatório',
        'email'         =>  'Email é obrigatório',
        'email.email'   =>  'Formato de Email é inválido.'

    ];
}
