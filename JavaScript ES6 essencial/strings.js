// retorno do tamanho de uma string
const textSize = 'texto'.length;
console.log(`Quantidade de letras é: ${textSize}`);

//retorna um array quebrando a string por um delimitador
const splittedText = 'texto'.split('e');
console.log(`\nArray com as posições separadas pelo delimitador: `, splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'texto'.replace('o', '@');
console.log(`\nSubstituição de valor: `, replacedText);

//Retorna a "fatia" de um valor
const lastChar = 'texto'.slice(-1);
console.log(`\nUltima letra de uma string: `, lastChar);

const allWithoutLastChar = 'pernambuco'.slice(1, -5);
console.log(`\nValor da string da primeira letra menos a ultima: `, allWithoutLastChar);

const secondToEnd = 'texto'.slice(1);
console.log(`\nValor da string da segunda letra até a ultima: `, secondToEnd);

