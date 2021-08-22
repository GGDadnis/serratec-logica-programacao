const prompt = require('prompt-sync')();

var garrafa = prompt("Quantos ml de alcool na garrafa? ")
var alcool = (garrafa * 0.7)
var gel = (garrafa * 0.3)

console.log(" Deve haver:", alcool, "de álcool\n", "Deve haver:", gel, "de gel")