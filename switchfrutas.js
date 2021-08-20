var prompt = require('prompt-sync')();

const fruta = prompt("Diga uma fruta: ");

switch (fruta) {
  case 'abacaxi':
  case 'Abacaxi':
    console.log('Faça um chá com a casca.');
    break;
  case 'melancia':
  case 'laranja':
  case 'Melancia':
  case 'Laranja':
    console.log('Melancia e laranja são frutas do verão.');
    break;
  default:
    console.log('Sem informações sobre a fruta.');
}