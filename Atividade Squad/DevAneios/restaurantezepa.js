/*Serratec
Lógica de programação - Professor Zepa
Atividade: Elicitação de Requisitos
Squad: DevAneios
Autor: Guilherme Gusman (GG) https://github.com/GGDadnis
Data: 21/08/2021

 O restaurante Zépa conta com um algoritmo de tecnologia de ponta para clientes fazerem seus pedidos de forma prática e rápida.
 O cardápio conta com hambúrguer vegetariano, batata frita com queijo e refrigerante (respectivamente: R$35, R$15 e R$15). 
*/

var prompt = require("prompt-sync")();

var pedido1 = ""
var pedido2 = ""
var pedido3 = ""

console.log("Bem vindo ao restaurante Zepa. Não se esqueça da nossa promoção do combo sair por R$ 60,00");

do{
while (pedido1 != "S" && pedido1 != "N"){
pedido1 = prompt("Deseja pedir o nosso hamburguer: (S/N) ");
}

while (pedido2 != "S" && pedido2 != "N"){
pedido2 = prompt("Deseja pedir nossa batata: (S/N) ");
}

while (pedido3 != "S" && pedido3 != "N"){
pedido3 = prompt("Deseja pedir nosso refrigerante: (S/N) ");
}

if(pedido1 == 'S')
pedido1 = 35;
else
pedido1 = 0

if(pedido2 == 'S')
pedido2 = 15; 
else
pedido2 = 0

if(pedido3 == 'S')
pedido3 = 15
else
pedido3 = 0

var preçoFinal = (pedido1 + pedido2 + pedido3);
 
if (preçoFinal == 65)
preçoFinal= 60
}
while (preçoFinal <= 0)

console.log('O valor da sua conta é ' + preçoFinal + ' reais');
