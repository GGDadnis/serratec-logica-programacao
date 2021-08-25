const prompt = require("prompt-sync")();


var onibus = []
onibus[0] = "Rosario x Pimenteiras"
onibus[1] = "Perpetuo x Fonte Santa"
onibus[2] = "Caleme x Alto"
onibus[3] = "Pimentel x Vale Paraiso"
onibus[4] = "Vila Muqui x Varzea"
onibus[5] = "Comary x Meudon"
onibus[6] = "Rodoviaria x Vale Alpino"
onibus[7] ="Centro x Canoas"

var n1 = prompt("Numero:")
var n2 = parseInt(n1) + 1

var nlinha = onibus[n2]

console.log("Onibus é", nlinha)



