const prompt= require("prompt-sync")();

var ask = prompt("Qual a sua fruta favorita?");
var askf = ask.toUpperCase();

if(askf == "MAÇA"){
    console.log("Ela é vermelha");
}
if(askf == "BANANA"){
    console.log("Banana é amarela");
}
if(askf == "UVA"){
    console.log("Uva pode ser verde ou roxa");
}

if(askf == "MELANCIA"){
    console.log("Melancias são água pura");
}

if(askf == "MELÃO"){
    console.log("Melão é uma fruta com gosto questionavel");
}

if(askf == "MORANGO"){
    console.log("Morangos em tortas é a melhor combinação");
}

else{
    console.log("Além de gostoso é saudavel a sua!");
}

console.log("Todas as frutas são muito coloridas e gostosas");
