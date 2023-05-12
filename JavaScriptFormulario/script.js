function mostrarNome(){
    var Nome = document.getElementById('pNome').value;
    var Sobrenome = document.getElementById('pSobrenome').value;
    var NomeCompleto = Nome + ' ' + Sobrenome;
    alert('Olá' + NomeCompleto);
}