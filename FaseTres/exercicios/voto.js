const prompt = require('prompt-sync')();

var age = prompt("Digite a sua idade: ");

vote = (age >= 16);

console.log("Você já pode votar?", vote)