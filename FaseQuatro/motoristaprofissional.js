var prompt = require('prompt-sync')();

//Entrada

    var A = prompt("Possui carteira A? (S/N): ");
    var B = prompt("Possui carteira B? (S/N): ");
    var D = prompt("Possui carteira D? (S/N): ");

//Processamento

    var moto = (A == "s") || (A == "S");
    var carro = (B == "s") || (B == "S");
    var vuc = (D == "s") || (D == "S");

    var carga = carro && vuc;
    var uber = carro;
    var motoboy = moto;
    
//Saída

console.log("Você é motorista profissional? ", carga);

    if (carga)
    console.log("Parabéns!");
    else console.log("Uma pena!");

    if (uber)
    console.log("Motorista baixe já seu app do Uber!");
    
    if (motoboy)
    console.log("Motoboy baixe já seu app do iFood!");