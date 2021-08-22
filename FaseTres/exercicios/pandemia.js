const prompt = require('prompt-sync')();

var temp = prompt("Digite a temperatura: ");
var mask = prompt("Usa mascara? (s/n) ");

var entrada = temp <= 37.5 && mask == "s";

console.log("Autorizar a entrada ", entrada);