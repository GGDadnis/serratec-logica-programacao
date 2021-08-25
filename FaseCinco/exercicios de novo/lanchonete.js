const prompt = require('prompt-sync')();

console.log("Lanchonete\nComplementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles")

var p1 = prompt("Item 1: ")
var p2 = prompt("Item 2: ")
var p3 = prompt("Adicionar Molho: ")

if (p1 == "Q")
p1 = "queijo"
if (p2 == "Q")
p2 = "queijo"

if (p1 == "B")
p1 = "bacon"
if (p2 == "B")
p2 = "bacon"

if (p1 == "A")
p1 = "alface"
if (p2 == "A")
p2 = "alface"

if (p1 == "T")
p1 = "tomate"
if (p2 == "T")
p2 = "tomate"

if (p1 == "P")
p1 = "picles"
if (p2 == "P")
p2 = "picles"

if (p3 == "Sim")
p3 = "com molho"
if (p3 == "Nao")
p3 = "sem molho"

console.log("[Cozinha]\nLanche com", p1, "e", p2, p3)