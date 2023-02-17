<?php

namespace App\Mail;

use App\Models\Configuracoes;
use App\Models\Sala;
use App\Models\SalaOld;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;


class SendMailUser extends Mailable
{
    use Queueable, SerializesModels;

    private $sala;
    private $email_suporte;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($sala)
    {
        $this->sala = $sala;
        if ($this->sala == NULL)
            abort(404, "Sala não encontrada!");
        $configEmail = Configuracoes::where('nome', Configuracoes::CONFIGURACAO_EMAIL_SUPORTE)->first();
        if ($configEmail != NULL)
            $this->email_suporte = $configEmail->valor;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $view = "";
        if ($this->sala instanceof Sala)
            $view = 'email.email';
        else if ($this->sala instanceof SalaOld)
            $view = 'email.email-old';
        else 
            return;
        return $this->from(env('MAIL_FROM_ADDRESS'))
            ->view($view)
            ->subject('#'.$this->sala->id.' Solicitação de Criação de Sala no Moodle')
            ->with([
                'sala' => $this->sala, 'email' => $this->email_suporte
            ]);
    }
}
