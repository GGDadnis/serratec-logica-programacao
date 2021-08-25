const prompt = require('prompt-sync')();

var conta = prompt("Conta: ");
var nconta = parseInt(conta);

var pagamento = prompt("Pagamento:");
var npag = parseInt(pagamento);

if ((npag >= 20) && (npag <= 100)){
var voucher = npag - nconta;
console.log("Reembolso: ", voucher);
}

else{
    console.log("Troco:", npag - nconta);
}