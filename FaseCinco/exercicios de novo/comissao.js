const prompt = require('prompt-sync')();

var vendas1 = prompt("Vendas totais: ");
var vendas = parseFloat(vendas1);
var comissao1 = vendas * 0.05;
console.log("Sua comissão: ", comissao1);

if(vendas >= 5000){
    var dif = vendas - 5000;
    var extra = dif * 0.09;
    console.log("Valor adicional: ", extra);
}