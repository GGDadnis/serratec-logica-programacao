const prompt = require("prompt-sync")();

var n = prompt("Numero:")

for(var i = 1; i <= 10; i++){
    var result = n * i
    console.log(result)
}