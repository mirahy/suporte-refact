<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class FaculdadeValidator.
 *
 * @package namespace App\Validators;
 */
class FaculdadeValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'sigla'          => 'required',
            'nome'           => 'required'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'sigla'          => 'required',
            'nome'           => 'required'
        ],
    ];

    protected $messages = [
        'sigla'     => 'Sigla é obrigatório',
        'nome'      => 'Nome é obrigatório'
    ];
}
