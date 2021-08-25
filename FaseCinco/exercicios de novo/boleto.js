const prompt = require('prompt-sync')();

var data = prompt("Dia de hoje:(ex: 10) ");
var n1 = prompt("Número do boleto: ");
var pagamento = prompt("Data do pagamento:(ex: 11) ");

if ((pagamento >= 11) && (pagamento <= 13)){
    var resultado = true;
}

else{
    var resultado = false;
}

console.log("Desconto na próxima mensalidade?", resultado)