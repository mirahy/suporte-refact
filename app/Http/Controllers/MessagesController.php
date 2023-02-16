<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Prettus\Validator\Exceptions\ValidatorException;
use Symfony\Component\HttpKernel\Exception\HttpException;

class MessagesController extends Controller
{
    public function exceptionMessages($msg){

        switch (get_class($msg)) {
            case HttpException::class:
              return $msg;
            case QueryException::class:
              abort(403, $msg->getMessage());
            case ValidatorException::class:
              abort(403, $msg = implode(" , ", $msg->getMessageBag()->all()));
            case Exception::class:
              abort(403, $msg = implode(" , ", $msg->getMessage()->all()));
            default:
              return $msg->getMessage()->all();
          }

    }
}
