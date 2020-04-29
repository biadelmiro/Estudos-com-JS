function fn(){
    return 'Code Here';
}

const arrowFn = () => 'Code here'; //se for apenas uma expressão
const arrowFn2 = () => {
    //mais de uma expressão
    return 'Code here';
}

//funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar funções

const controlFnExec => fnParam => allowed =>{ 
    //uma função que retorna outro funcao que chama um parametro
    if(allowed){
        inParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // executará a função
handleFnExecution();

//a controlfnexec se fosse como função e não arrowfunction
function controlFnExec(fnParam){
    return function(allowed){
        if (allowed){
            inParam();
        }
    }
}