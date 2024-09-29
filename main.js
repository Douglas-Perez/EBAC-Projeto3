$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false,
                minlength: 15
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome",
            email: "Por favor, insira o seu e-mail",
            telefone: "Por favor, insira seu número de celular completo",
            mensagem: "Por favor, escreva a sua mensagem"
        }
    })
})