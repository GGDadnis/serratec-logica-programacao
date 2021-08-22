const prompt = require('prompt-sync')();

var sexo = prompt("Qual o sexo da pessoa a ser consultada: ");
var bday = prompt("Qual o ano de nascimento: ");
var sf = sexo == "Feminino" && bday <= 2000;
var sm = sexo == "Masculino" && bday <= 2003;

console.log("Sexo: ", sexo, "\nAno de nascimento: ", bday);

if(sexo == "Feminino")
    console.log("Cidadão Emancipado? ", sf);

if(sexo == "Masculino")
    console.log("Cidadão Emancipado? ", sm);