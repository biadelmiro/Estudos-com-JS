var elementos = [];
var topo      = -1;
const MAX     = 10;

//adiciona elementos

function push(num){ //faça o empilhamento dos valores! 
    if(topo < MAX){ //verificar se a pilha já atingiu a capacidade
        topo = topo + 1 ;
        elementos[topo] = num;

    } else {
        console.log("Pilha está cheia");
    }
}

function estaVazia(){
    return topo === -1;
}

function pop(){
    if(topo != -1){
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    } else {
        console.log('Pilha está vazia');
    }
}

push(10); //function push criada mais acima
push(20);
push(30);

console.log(elementos); // ver o array onde inseri os elementos

console.log(pop()); //primeiro sai 30
console.log(pop()); //20
console.log(pop()); //10

///////////////////////

var numDecimal = 10;
var resto;

console.log ('EMPILHAAAAAAAR');

while (numDecimal != 0){
    resto = parseInt(numDecimal % 2); //parseInt serve pra mnater o númeor inteiro
    push(resto);
    numDecimal = parseInt(numDecimal / 2);
}

console.log ('DES   EMPILHAAAAAAAR');

while (!estaVazia()){ // exclamação na frente (negação)
    console.log(pop());
}