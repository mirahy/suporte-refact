<html>
    <body>
        <h2 style="font-weight: normal;">Solicitação de criação de sala: <b>{{ $sala->nome_sala }}</b></h2>
        <p></p>
        <p>Nome: <b>{{ $sala->nome_professor }}</b></p>
        <p>Faculdade: <b>{{ $sala->faculdade }}</b></p>
        <p>Curso: <b>{{ $sala->curso }}</b></p>
        <p>Chave de Inscrição para Estudantes acessarem a sala:: @if($sala->senha_aluno != NULL && $sala->senha_aluno != '') <b>{{ $sala->senha_aluno }}</b> @else <i style="color: gray;">sem senha</i> @endif</p>
        <p>Chave de Inscrição para o Professor acessar a sala: @if($sala->senha_professor != NULL && $sala->senha_professor != '') <b>{{ $sala->senha_professor }}</b> @else <i style="color: gray;">sem senha</i> @endif</p>
        @if($sala->observacao != NULL && $sala->observacao != '')
        <p>Observação: <b>{!! $sala->observacao !!}</b></p>
        @endif
        <p>Status: <b><span style="background-color: {{ $sala->status->cor }}; padding: 3px">{{ $sala->status->descricao }}</span></b>
        @if($sala->mensagem != NULL && $sala->mensagem != '')
            <br/>
            @if($sala->status->chave == 'CONCLUIDO')
                Link da Sala: <b><a href="{{ $sala->mensagem }}">{{ $sala->mensagem }}</a></b>
            @endif
            @if($sala->status->chave == 'REJEITADO')
                Justificativa: <b><span style="color: {{ $sala->status->cor }}">{{  $sala->mensagem }}</span></b>
            @endif
        @endif
        </p>
        <p></p>
        <br/>
        <br/>
        <p style="color: gray;"><i>Este é um email automático enviado pelo sistema, não responda este email!</i> </p>
        <p></p>
        © Equipe EAD <br/>
    Contato: <a href="mailto:{{$email}}">{{$email}}</a></p>
    @if(config('app.debug'))
    <button class="btn btn-secondary botao-barra" type="button" onclick="window.location.href = '/salas'">Voltar</button>
    @endif
    </body>
</html>