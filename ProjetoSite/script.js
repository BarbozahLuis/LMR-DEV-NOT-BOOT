function preencher(){
    var cartao = document.getElementById('card-number').value;
    var nome = document.getElementById('card-holder').value;
    var mes = document.getElementById('card-month').value;
    var ano = document.getElementById('card-year').value;
    var cvc = document.getElementById('card-cvc').value;

    //se o espaço nome estiver vazio, imprima um alerta
    if(cartao==""){
        alert("Digite o número do cartão")
    }
    // se o endereço estiver vazio, imprima um alerta
    if(nome==""){
        alert("Digite o nome do cartão")
    }
    //se o email estiver vazio imprima um alerta
    if(mes==""){
        alert("Digite o mês de expiração")
    }
    //se o email um nao for igual ao email dois imprima um alerta de divergencia
    if(ano==""){
    }else{
        alert("Digite o ano de expiração")
    }
    //se a senha estiver vazia imprima um alerta
    if(cvc==""){
        alert("Digite o cvv")
    }
}