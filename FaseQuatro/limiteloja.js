const prompt = require('prompt-sync')();

const limite = 8;

var qtde = prompt("Quantas pessoas estão na loja? ");

    const permitir = (qtde < limite) && (qtde != 7);
    const momento = (qtde == limite);
    const expulsar = (qtde > limite);
    const quase = (qtde == 7)

if (permitir)
console.log("Permita a entrada do cliente.");
if (momento)
console.log("Negar entrada para não exceder o limite, por favor.");
if (expulsar)
console.log("Limite já está excedido, negar entrada e fazer o possível para resolver.");
if (quase)
console.log("Permita a entrada, desde que não esteja acompanhado.");