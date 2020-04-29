// while é enquanto a operação for verdadeira execute

var n = 0;
var x = 0;
while (n < 3){
    n++;
    x += n;
    console.log(x);
}

//do-while ele executa primeiro e dps verifica

let i = 0;

do {
    i += 1;
    console.log(i);

} while(i < 5);


/// for in pra cada tipo de propriedade
/// for of executa apenas as enumeradas
let meuArray = [3, 5, 7];
meuArray.foo = 'HELLO';

for (let i in meuArray){
    console.log(i); //i de indice o local em si
}

for (let i of meuArray){
    console.log(i); //i pega os valores em sí, sem propriedades
}

/// CONTROLE DA REPETIÇÃO

//break

console.log('EXEMPLO DE UTILIZAÇÃO DO BREAK');

var index = 0;

while(true){
    index++;

    if(index > 10){
        break;
    }
    console.log(index);
}


/// continue

console.log(`\nExemplo de utilização de continue`);
const meuArray = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < meuArray.length; index++){
    const element = meuArray[index];
    
    if(element % 2 === 0){ //se o elemento for par, ele continua e não loga
        continue;
    }

    console.log(element);
}