/*Serratec
Lógica de programação - Professor Zepa
Atividade: Elicitação de Requisitos
Squad: DevAneios
Autor: Guilherme Gusman (GG) https://github.com/GGDadnis
Data: 24/08/2021

Filhinho do Eduardo e Mônica ficou de recuperação?
Digitar 4 notas, ou seja precisamos receber 4 dados do usuário, e salvar em 4 variáveis diferentes. Além das notas, precisamos calcular a sua média que deve ser MAIOR ou IGUAL a 7. SE a soma das 4 notas for maior ou igual a 7, a família poderá viajar, caso contrário a criança terá que fazer prova de recuperação.*/

const prompt = require("prompt-sync")()

console.log("Digite as notas do aluno e veja se ele passou direto. Mas lembre-se que se todas as notas forem 0 (zero) o programa não aceitará")

//Entrada
do{
var nota1 = prompt("Digite a nota da p1: ");
var n1 = parseFloat(nota1);

var nota2 = prompt("Digite a nota da p2: ");
var n2 = parseFloat(nota2);

var nota3 = prompt("Digite a nota da p3: ");
var n3 = parseFloat(nota3);

var nota4 = prompt("Digite a nota da p4: ");
var n4 = parseFloat(nota4);

//Processamento
var media = ((n1 + n2 + n3 + n4) / 4);
}while(media == 0)

//Saída
console.log("A média do aluno é:", media)

if (media >= 7)
console.log("Parabéns, o aluno está de férias!")

else
console.log("Infelizmente o aluno terá que fazer a recuperação.")