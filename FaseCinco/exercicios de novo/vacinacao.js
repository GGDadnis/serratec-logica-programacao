const prompt= require("prompt-sync")();

var idade = prompt("Idade:")

if(idade > 67){
    console.log("Por que não vacinou ainda?")
}
if(idade < 67){
    console.log("Volte na próxima semana")
}
else{
    console.log("Vacinação hoje")
}