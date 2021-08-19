var prompt = require('prompt-sync')();

//Entrada
var A = prompt("Possui carteira A? (S/N): ");
var B = prompt("Possui carteira B? (S/N): ");
var D = prompt("Possui carteira D? (S/N): ");

//Processamento
var moto = A == "s" || A == "S";
var carro = B == "s" || B == "S";
var vuc = D == "s" || D == "S";

    var resposta = moto && carro && vuc;

//Saída
console.log("Você é motorista profissional? ", resposta);
