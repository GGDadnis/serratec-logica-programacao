const prompt = require('prompt-sync')();

var ang1 = prompt("Angulo 1: ");
var ang11 = parseFloat(ang1);
var ang2 = prompt("Angulo 2: ");
var ang22 = parseFloat(ang2);
var ang3 = prompt("Angulo 3: ");
var ang33 = parseFloat(ang3);

if ((ang11 == ang22) && (ang22 == ang33)){
    console.log("O triangulo é equilátero")
}

if ((ang11 != ang22) && (ang22 != ang33)){
    console.log("O triangulo é escaleno")
}

else{
    console.log("O triangulo é isósceles")
}