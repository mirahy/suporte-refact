<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class UnidadeOrganizacionalValidator.
 *
 * @package namespace App\Validators;
 */
class UnidadeOrganizacionalValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'nome'            => 'required',
            'valor'           => 'required'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'nome'            => 'required',
            'valor'           => 'required'
        ],
    ];

    protected $messages = [
        'nome'            => 'Nome é obrigatório',
        'valor'           => 'Valor é obrigatório'
    ];
}
