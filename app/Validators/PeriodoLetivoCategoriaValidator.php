<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class PeriodoLetivoCategoriaValidator.
 *
 * @package namespace App\Validators;
 */
class PeriodoLetivoCategoriaValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'curso_id'          => 'required|numeric',
            'periodo_letivo_id' => 'required|numeric',
            'categoria_id'      => 'required|numeric'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'curso_id'          => 'required|numeric',
            'periodo_letivo_id' => 'required|numeric',
            'categoria_id'      => 'required|numeric'
        ],
    ];
    protected $messages = [
        'curso_id.required'               => 'Id curso é obrigatório',
        'curso_id.numeric'                => 'Id curso deve ser numérico',
        'periodo_letivo_id.required'      => 'Id período é obrigatório',
        'periodo_letivo_id.numeric'       => 'Id período deve ser numérico',
        'categoria_id.required'           => 'Id categoria é obrigatório',
        'categoria_id.numeric'            => 'Id categoria deve ser numérico'
    ];
}
