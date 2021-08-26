/*Serratec
Lógica de programação - Professor Zepa
Atividade: Elicitação de Requisitos
Squad: DevAneios
Autor: Guilherme Gusman (GG) https://github.com/GGDadnis
Data: 24/08/2021

A Lanchonete Java'S solicitou ao Squad DevAneios um algoritimo que apresentasse ao seu cliente um cardápio com a lista de lanches e preços para sua escolha e ao final do seu pedido lhe fosse gerada a conta com a mensagem "Favor dirija-se ao caixa".*/

const prompt = require("prompt-sync")()
var conta = 0;
var mensagem = "Lamento, não oferecemos essa opção ";

do{
//Entrada
console.log("Cárdapio de Lanches e Bebidas, escolha o seu!\nLanches:\n1 - Croissant R$ 6,35\n2 - Coxinha R$ 4,00\n3 - Nata R$ 4,50\n4 - Sanduiche natural completo R$ 6,80");
var lanche = prompt("Número do lanche desejado:  ");

console.log("Bebidas:\n1 - Refrigerante Lata R$ 6,99\n2 - Água mineral R$ 2,99\n3 - Refresco R$ 2,50\n4 - Suco Natural R$ 7,99");
var bebida = prompt("Número da bebida desejada: ");


//Processamento
switch(lanche){

    case "1":
        conta = 6.35;
        break;
    case "2":
        conta = 4;
        break;
    case "3":
        conta = 4.50;
        break;
    case "4":
        conta = 6.80;
        break;
    default: 
        conta = 0
        console.log (mensagem, lanche);
}

switch(bebida){

    case "1":
        conta = conta + 6.99;
        break;
    case "2":
        conta = conta + 2.99;
        break;
    case "3":
        conta = conta + 2.50;
        break;
    case "4":
        conta = conta + 7.99;
        break;

     default: 
     conta = conta + 0
     console.log (mensagem, bebida);
  }
  if(conta == 0)
  console.log("Infelizmente sem pedir um lanche ou bebida válidos, não posso prosseguir.")
}while(conta == 0)

//Saída
    console.log("O valor da conta é R$ " + conta, "\nDirija-se ao caixa por gentileza.");