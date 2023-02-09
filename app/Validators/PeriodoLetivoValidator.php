<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class PeriodoLetivoValidator.
 *
 * @package namespace App\Validators;
 */
class PeriodoLetivoValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'nome'        => 'required',
        ],
        ValidatorInterface::RULE_UPDATE => [
            'nome'        => 'required',
        ],
    ];

    protected $messages = [
        'nome'          =>  'Um nome é Requerido',

    ];
}
