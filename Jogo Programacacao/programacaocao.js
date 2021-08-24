const prompt = require("prompt-sync")();

    console.log("─────▄████▀█▄");
    console.log("───▄█████████████████▄");
    console.log("─▄█████.▼.▼.▼.▼.▼.▼▼▼▼");
    console.log("▄███████▄.▲.▲▲▲▲▲▲▲▲");
    console.log("████████████████████▀▀");
    console.log("\nBravo Heroi, o grande e poderoso dragão 'Programaçãnção' está vindo para destruir o mundo, e só você poderá nos salvar!");

var nome = prompt("Qual seu nome nobre guerreiro?");

do{
console.log("Lembre-se que existe apenas uma arma correta, e você terá duas chances!\n1:👠  2:⚔️  3:🔪");
var escolha = prompt("Qual arma você escolhe para matar o dragão? (ex: 2)");
var n1 = parseInt(escolha) - 1;

var arma = ["Sapato", "Espada", "Faca"];

var resultadofinal = arma[n1];
var i = 0

if(i == 0){
    i++
    if(resultadofinal == "Espada"){
    console.log("Você detonou o Programaçãnção!\nParabéns ", nome, ", você ganhou o jogo!");
    }
    if(resultadofinal != "Espada"){
    console.log("O Programaçãnção está te dando uma surra, tente de novo!");
  }
}

if(i == 1 && resultadofinal != "Espada"){
    i++
    console.log("Você tem apenas mais uma chance!\n1:👠  2:⚔️  3:🔪");
    escolha = prompt("Qual arma você escolhe para matar o dragão? (ex: 2)");
    n1 = parseInt(escolha) - 1;
    resultadofinal = arma[n1];
    if(resultadofinal == "Espada"){
    console.log("Você detonou o Programaçãnção!\nParabéns ", nome, ", você ganhou o jogo!");
  }
}

if(i == 2 && resultadofinal != "Espada"){
  console.log("É assim que você resolve seus problemas ", nome, "?\nGAME OVER");
 }

var coin = prompt("Quer jogar de novo? (s/n)");
var coinup = coin.toUpperCase();
}while(coinup == "S")