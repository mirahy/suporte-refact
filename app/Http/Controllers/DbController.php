<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;


class ConnectDbController extends Controller
{
    private $exceptionMessagesController;

    public function __construct(MessagesController $exceptionMessagesController)
    {
        $this->exceptionMessagesController  = $exceptionMessagesController;
    }


    public function connect($base)
    {
        try {
            Config::set('database.default', $base); //atribuir a conexão padrão  
            // Conecta no banco
            DB::connection($base);
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    public function reconnect($base)
    {
        try {
            Config::set('database.default', $base); //atribuir a conexão padrão  
            // Reconecta no banco
            DB::reconnect($base);
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }

    //recebe a uma base como parametro para conexão
    public function close($base)
    {
        try {
            // Encerra conexão
            DB::disconnect($base);
        } catch (Exception $e) {
            return $this->exceptionMessagesController->exceptionMessages($e);
        }
    }
}
