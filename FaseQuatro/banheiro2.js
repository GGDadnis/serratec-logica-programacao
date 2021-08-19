const prompt = require('prompt-sync')();

    var banheiro = prompt("A luz do banheiro está Verde? (s/n): ");

    var luz = (banheiro == "s") || (banheiro == "S");

var mensagem = ""

if (luz)
mensagem = "Entre";
else
mensagem = "Aguarde a luz ficar verde, por favor!";

console.log(mensagem);