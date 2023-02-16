<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;


class DbController extends Controller
{
    protected $exceptionMessagesController;

    public function __construct(MessagesController $exceptionMessagesController)
    {
        $this->exceptionMessagesController  = $exceptionMessagesController;
    }


    public function connect($base)
    {
        try {
            if (DB::connection()->getDatabaseName() != $base) //verifica se a conexão ja existe
            {
                //atribuir a conexão padrão 
                Config::set('database.default', $base);
                // Conecta no banco
                DB::connection($base);
            }
        } catch (Exception $e) {
            $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function reconnect($base)
    {
        try {
            //atribuir a conexão padrão  
            Config::set('database.default', $base);
            // Reconecta no banco
            DB::reconnect($base);
        } catch (Exception $e) {
            $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    //recebe a uma base como parametro para conexão
    public function close($base)
    {
        try {
            // Encerra conexão
            DB::disconnect($base);
        } catch (Exception $e) {
            $this->exceptionMessagesController->exceptionMessages($e);
        }
    }
}
