const prompt = require('prompt-sync')();

var p1 = prompt("Player 1: ");
var p2 = prompt("Player 2: ");

var victory1 = p1 > p2;
var victory2 = p2 > p1
var tie = p1 == p2;

console.log(":  Resultados  :")
console.log("Player 1 venceu?", victory1);
console.log("Player 2 venceu?", victory2);
console.log("Houve empate?", tie);