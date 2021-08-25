const prompt = require('prompt-sync')();

console.log("001 Cadeira simples\n002 Cadeira luxo\n003 Mesa simples\n004 Mesa luxo\n005 Cama");
var desejo = prompt("Qual o item deseja exibir detalhes?");

if (desejo == 001){
    console.log("001 Cadeira simples - R$ 100,00");
    desejo = 100;
}

if (desejo == 002){
    console.log("002 Cadeira luxo  - R$ 200,00");
    desejo = 200;
}

if (desejo == 003){
    console.log("003 Mesa simples - R$ 450,00");
    desejo = 450;
}

if (desejo == 004){
    console.log("004 Mesa luxo - R$ 900,00");
    desejo = 900;
}

if (desejo == 005){
    console.log("005 Cama - R$ 1500,00");
    desejo = 1500;
}

var off = prompt("Deseja aplicar desconto automatico? (s/n)");

if (off == "s"){
    var desconto = desejo * 0.05;
    var final = desejo - desconto;
    console.log("preço final:", final);
}
else{
    console.log("Boas vendas!");
}