const numeros = [2,3,4,5,6,8,10,15];

//Se voce quiser que o número caia na primeira condição que ele funcionar use o else if

console.log('\nesle if');
numeros.forEach(item =>{
    if (item % 2 === 0){
        console.log(`O número ${item} é divisível por 2`);
    } else if (item % 3 === 0 ){
        console.log(`O número ${item} é divisível por 3`);
    } else if (item % 5 === 0){
        console.log(`O número ${item} é divisível por 5`);
    }
});


//para o mesmo número aparecer mais de uma vez é necessário usar apenas if

console.log('\nif');
numeros.forEach(item =>{
    if (item % 2 === 0){
        console.log(`O número ${item} é divisível por 2`);
    }
    if (item % 3 === 0 ){
        console.log(`O número ${item} é divisível por 3`);
    }
    if (item % 5 === 0){
        console.log(`O número ${item} é divisível por 5`);
    }
});