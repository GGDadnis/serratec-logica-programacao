const prompt = require('prompt-sync')();

do{
var ang1 = prompt("Valor do primeiro angulo:");
var n1 = parseInt(ang1);
}
while(n1 <= 0)
do{
var ang2 = prompt("Valor do segundo angulo:");
var n2 = parseInt(ang2);
}
while(n2 <= 0)
do{
var ang3 = prompt("Valor do terceiro angulo:");
var n3 = parseInt(ang3);
}
while(n3 <= 0)

var soma = (n1 + n2 + n3);
var val = (soma == 180);

console.log(soma);
console.log("Os angulos digitados formam um triangulo:", val);