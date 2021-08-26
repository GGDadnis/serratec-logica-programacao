/*Serratec
Lógica de programação - Professor Zepa
Atividade: Elicitação de Requisitos
Squad: DevAneios
Autor: Guilherme Gusman (GG) https://github.com/GGDadnis
Data: 20/08/2021

Delivery de comida japonesa iniciando suas atividades precisa contratar motoboy e, como tem uma certa urgência na contratação, não pode ficar perdendo tempo com currículos que não atendam aos requisitos da vaga, o objetivo é fazer uma pré-seleção e permitir que somente os canditados que cumpram tais requisitos enviem seu currículo para o RH. Possui CNH A? CNH na validade? Experiência na área? 
Todas respostas têm que ser verdadeiras  para o candidato estar apto a se candidatar.*/

const prompt = require('prompt-sync')();

console.log("Bem vindo(a) a pré seleção da vaga de emprego para motoboy.")

var A = "Você possui CNH A? (s/n)";
var cnh = A.toUpperCase();

var data = "A CNH está na validade? (s/n)";
var validade = data.toUpperCase();

var area = "Possui experiencia na área? (s/n)";
var exp = area.toUpperCase();

if(cnh == "S" && validade == "S" && exp == "S")
    console.log("Parabéns, você está apto para se candidatar a vaga de motoboy.")

else
    console.log("Infelizmente precisamos de pessoas com mais experiência para o cargo.")


