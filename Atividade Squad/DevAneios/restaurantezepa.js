/*Serratec
Lógica de programação - Professor Zepa
Atividade: Elicitação de Requisitos
Squad: DevAneios
Autor: Guilherme Gusman (GG) https://github.com/GGDadnis
Data: 21/08/2021

 O restaurante Zépa conta com um algoritmo de tecnologia de ponta para clientes fazerem seus pedidos de forma prática e rápida.
 O cardápio conta com hambúrguer vegetariano, batata frita com queijo e refrigerante (respectivamente: R$35, R$15 e R$15). 
*/

const prompt = require('prompt-sync')();

console.log('Que tal limpar a casa hoje?')

do {
    var sala = prompt('Você limpou a sala na última semana? Digite S ou N ');
} while ((sala != 'S') && (sala != 'N')) 

do {
  var cozinha= prompt('Você limpou a cozinha nos últimos três dias? Digite S ou N ');  
} while ((cozinha != 'S') && (cozinha != 'N')) 

do {
    var banheiro = prompt('Você limpou o banheiro nos últimos três dias? Digite S ou N ');
  } while ((banheiro != 'S') && (banheiro != 'N')) 

do{
var quarto = prompt('Você limpou o quarto na última semana? Digite S ou N ');
} while ((quarto != 'S') && (quarto != 'N')) 

if(sala == "N")
console.log('É necessário limpar a sala');
else
console.log('Não é necessário limpar a sala'); 

if(cozinha == "N")
console.log('É necessário limpar a cozinha');
else
console.log('Não é necessário limpar a cozinha'); 

if(banheiro == "N")
console.log('É necessário limpar a sala');
else
console.log('Não é necessário limpar o banheiro'); 

if(quarto == "N")
console.log('É necessário limpar o quarto');
else
console.log('Não é necessário limpar o quarto');