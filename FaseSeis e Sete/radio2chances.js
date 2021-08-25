const prompt = require("prompt-sync")();

for(i = 0; i < 3; i++){
  var chance = 0;
  var acerto;

     do{
      var resposta = prompt("Qual a sua resposta a pergunta ao vivo? ")
      acerto = resposta == "digitacao";
      chance++
    }while (chance < 2 && !acerto)

    if(acerto){
      console.log("Parabéns!")
  }
    else {console.log("Errou!")
  }
}
console.log("Acabou a promo pessoal!")
