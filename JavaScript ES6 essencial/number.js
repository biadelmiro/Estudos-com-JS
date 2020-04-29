const myNumber = 12.4032;

//transformar numero para string
const numberAsString = myNumber.toString();
console.log(`Número transformado em string: `, typeof numberAsString);
//typeof retorna o tipo da variável

//retorna número com um número de casa decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`\nNúmero com duas casas decimais: `, fixedTwoDecimals);

//transforma uma string em float
console.log(`\nString parseada para float: `, parseFloat(`13.22`));

//transforma uma string em int
console.log(`\nString parseada para int: `,  parseInt(`13.20`));