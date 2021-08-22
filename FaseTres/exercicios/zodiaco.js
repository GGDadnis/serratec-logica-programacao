const prompt = require('prompt-sync')();

var dia = prompt("Dia do aniversário:");
var mes = prompt("Mês do aniversário:");

var inteligente = dia <= 18 && mes == 2 || dia >= 21 && mes == 1;

console.log("Mês do aniversário:", mes);
console.log("Dia do aniversário: ");
console.log("Você é inteligente? ", inteligente);