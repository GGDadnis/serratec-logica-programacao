const prompt = require('prompt-sync')();

var vendas1 = prompt("Vendas totais: ");
var vendas = parseFloat(vendas1);
var comissao1 = vendas * 0.05;
var comissaof = (Math.round(comissao1 * 100) / 100).toFixed(2);
console.log("Sua comissão: ", comissaof);

if(vendas >= 5000){
    var dif = vendas - 5000;
    var extra = dif * 0.09;
    var extraf = (Math.round(extra * 100) / 100).toFixed(2);
    console.log("Valor adicional: ", extraf);
}