const prompt = require('prompt-sync')();

var regiao = prompt("Qual o estado em que você reside? ")

switch (regiao) {
    case 'Rio de Janeiro':
    case 'Espirito Santo':
    case 'Minas Gerais':
    case 'Sao Paulo':
    case 'RJ':
    case 'ES':
    case 'MG':
    case 'SP':
        console.log("Sudeste!");
        break;
    case 'Parana':
    case 'Santa Catarina':
    case 'Rio Grande do Sul':
    case 'PR':
    case 'SC':
    case 'RS':
        console.log("Sul!");
        break;
    case 'Acre':
    case 'Amazonas':
    case 'Roraima':
    case 'Rondonia':
    case 'Amapa':
    case 'Para':
    case 'Tocantins':
    case 'AC':
    case 'AM':
    case 'AP':
    case 'PA':
    case 'RC':
    case 'RO':
    case 'TO':
        console.log("Norte!");
        break;
    case 'Mato Grosso', 'MT', 'Goias', 'GO', 'Mato Grosso do Sul', 'MS', 'Brasilia', 'DF':
        console.log("Centro-Oeste!");
        break;
    case 'Maranhao', 'MA', 'Piaui', 'PI', 'Ceara', 'CE', 'Rio Grande do Norte', 'RN', 'Paraiba', 'PB', 'Pernambuco', 'PE', 'Alagoas', 'AL', 'Sergipe', 'SE', 'Bahia', 'BA':
        console.log("Nordeste!");
        break;
    default:
        console.log("Tente digitar de novo sem acentos (ex: Goias), ou apenas a sigla (ex: RJ)");
}