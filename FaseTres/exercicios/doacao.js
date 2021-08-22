const prompt = require('prompt-sync')();

console.log('== Banco de Sangue ==\n[Digite “Sim” ou “Nao” nas restrições a seguir]');

var idade = prompt("Idade abaixo de 16 ou acima de 69 anos: ");
var kg = prompt("Pesa menos de 50kg: ");
var hep = prompt("Portador de Hepatite: ");
var mal = prompt("Já teve Malária: ");
var doa = prompt("Fez doação recente: ");

var validade = idade == "Nao" && kg == "Nao" && hep == "Nao" && mal == "Nao" && doa == "Nao";

console.log("[Resultado da triagem]");
console.log("Pode doar sangue?", validade);