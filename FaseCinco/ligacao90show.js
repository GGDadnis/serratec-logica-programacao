const ler = require('prompt-sync')();

do {
var telefone = ler("Ligando para você: ");

var errado = telefone != "90show";

if (errado)
console.log("Que pena...");
else
console.log("Parabéns você ganhou");
}
while (errado);