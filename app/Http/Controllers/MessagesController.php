<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessagesController extends Controller
{
    public function exceptionMessages($msg){

        switch (get_class($msg)) {
            case QueryException::class:
              return  $msg->getMessage();
            case ValidatorException::class:
              return $msg->getMessageBag()->all();
            case Exception::class:
              return $msg->getMessage()->all();
            default:
              return $msg->getMessage()->all();
          }

    }
}
