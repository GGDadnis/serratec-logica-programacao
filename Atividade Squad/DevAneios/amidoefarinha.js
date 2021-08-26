/*Serratec
Lógica de programação - Professor Zepa
Atividade: Elicitação de Requisitos
Squad: DevAneios
Autor: Guilherme Gusman (GG) https://github.com/GGDadnis
Data: 20/08/2021

Criar um Alerta de estoque para que quando algum item estiver abaixo de algum limite proposto, vai ficar retornando mensagem de alerta e caso o produto não esteja nesse limite ficaremos com mensagem de quantidade suficiente, será importante ao final da mensagem conter a quantidade de produtos ainda restante, os produtos são retirados do estoque 1 vez por dia.
+INSTRUÇÕES+
A Cada produto perguntar (Quantidade total de compras do (O NOME DO PRODUTO): (SUA QUANTIDADE))
Perguntar abaixo ('Dia Da Compra: ')
Quando Algum dos itens Estiver Abaixo de 7 UNIDADES Vai Receber Uma Mensagem ('Lembrete Comprar Produto e (O NOME DO PRODUTO)').
Caso não tenha atingido esse número retorna ('Quantidade Suficiente')
Se Caso tenha comprado produto demais para o mês irá retornar um valor negativo e sua mensagem vai ser (('LEMBRETE OS DIAS NEGATIVOS SÃO QUANTIDADES EXTRAS DO PRODUTO'))
A Cada dia que for retirado uma unidade irá retornar ('No' NumeroDoDia 'º Dia após nossa compra teremos,' X 'Unidades de: ' E o Nome do produto)
LISTA PRODUTOS NO ESTOQUE QUE VOCÊ PODE UTILIZAR:
Amido 
Farinha
*/

const prompt = require("prompt-sync")()

console.log("Bem vindo ao controle de estoque.\nLembre-se de utilizar apenas números.")

//Entrada 
var p1 = 'Amido';
var amido = prompt("Quantidade total de compras do " + p1 + ": ");
var qtdp1 = amido;
var diap1 = prompt("Dia da compra: ");

var p2 = 'Farinha';
var farinha = prompt("Quantidade total de compras do " + p2 + ": ");
var qtdp2 = farinha;
var diap2 = prompt("Dia da compra: ");

//Processamento e Saída Amido
    do{
    qtdp1--
    console.log('No ',diap1--,'º Dia após nossa compra teremos,', qtdp1,'Unidades de:', p1);
    if(qtdp1 >= 1 && qtdp1 < 7){
    console.log('Lembrete Comprar Produto', p1);
    }
    else{
    console.log('Quantidade Suficiente');
    if(diap1 <= 0){
    console.log('!!!!!!LEMBRETE OS DIAS NEGATIVOS SÃO QUANTIDADES EXTRAS DO PRODUTO!!!!!!');
    }
  }     
}while(qtdp1 >= 1);
console.log('!==========!');

//Processamento e Saída Farinha
    do{
    qtdp2--
    console.log('Nº ',diap2--,'º Dia após nossa compra teremos,', qtdp2,'Unidades de:', p2);
    if(qtdp2 >= 1 && qtdp2 < 7){
    console.log('Lembrete Comprar Produto', p2);
    }
    else{
    console.log('Quantidade Suficiente');
    if(diap2 <= 0){
    console.log('!!!!!!LEMBRETE OS DIAS NEGATIVOS SÃO QUANTIDADES EXTRAS DO PRODUTO!!!!!!');
    }
  }     
}while(qtdp2 >= 1)