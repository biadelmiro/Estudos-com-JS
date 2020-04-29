let teste = 'PRIMEIRO EXEMPLO';

(() => {
    console.log(`Valor dentro da função "${teste}"`);

    if(true){
        let teste = 'SEGUNDO EXEMPLO';
        console.log(`O valor dentro da função dentro do if "${teste}"`);
    }
    teste = 'TERCEIRO EXEMPLO';

    console.log(`Valor após outra alteração "${teste}"`);
})();


//função que é de inicio imediato ()