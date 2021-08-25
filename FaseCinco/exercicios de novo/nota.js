//Enunciado errado, coloca o 4, 6 e o 8 em dois resultados diferentes.

const prompt= require("prompt-sync")();

var p1 = prompt("Nota da p1:")
p1 = parseInt(p1) 
var p2 = prompt("Nota da p2:")
p2 = parseInt(p2) 

var final = p1 + p2
console.log(final)

if (final <= 4)
    console.log("Reprovado")

if ((final <= 6) && (final > 4))
    console.log("Recuperação")

if ((final > 6) && (final <= 8))
    console.log("Aprovado")

if ((final > 8) && (final <= 10))
    console.log("Destaque")