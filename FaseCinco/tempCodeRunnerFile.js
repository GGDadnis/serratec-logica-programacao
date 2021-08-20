const prompt = require('prompt-sync')();

var numpag1 = 0;
var deadline = 0;

console.log("Bem vindo!")

var livro1 = prompt("Qual o nome do livro que você lerá? ");
var numpag1 = prompt("Qual o número de páginas o livro possui? ");
var deadline = prompt("Quantos dias faltam para o prazo de leitura? ");

var conta = (numpag1 / deadline);
var contafinal = Math.ceil(conta);
console.log("Você deverá ler ao menos ", contafinal, " por dia!");

const mensagem = "Recomendo a leitura do livro "

switch (numpag1) {
    case (numpag1 >= 500) && (livro1 != "Moby Dick"):
        console.log(mensagem, "Moby Dick, Melville!");
    case (numpag1 >= 500) && (livro1 != "Duna") && (livro1 = "Moby Dick"):
        console.log(mensagem, "Duna, Herbert!")
    break
}