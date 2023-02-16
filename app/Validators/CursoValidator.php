<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class CursoValidator.
 *
 * @package namespace App\Validators;
 */
class CursoValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'nome'           => 'required',
            'faculdade_id'   => 'required',
            //'curso_key'      => 'required',
        ],
        ValidatorInterface::RULE_UPDATE => [
            'nome'           => 'required',
            'faculdade_id'   => 'required',
            //'curso_key'      => 'required',
        ],
    ];

    protected $messages = [
        'nome'          => 'Nome é obrigatório',
        'faculdade_id'  => 'Faculdade é obrigatório'
        // 'curso_key'  => 'curso_key é obrigatório'
    ];
}
