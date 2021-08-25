const prompt = require('prompt-sync')();

var nome = prompt("Nome:");
var vacina = prompt("Vacinado? (s/n)");
var validacao = vacina != "s";

console.log("[Triagem]");
console.log("Sujeito a infecção?", validacao);