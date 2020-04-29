const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva',
    number: 1
};

//recupera as "chaves" do objeto tipo as propriedades
console.log('Propriedades do objeto user: ', Object.keys(user));

//recupera os valores dentro das chaves (propriedades)
console.log(`\nValores das propriedades do objeto user: `, Object.values(user));

//retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log(`\nLista de propriedades e valores: `, Object.entries(user));

//ao fazer o merge é interessante criar um novo objeto para não interferir
//no objeto principal

console.log(`\nRetorno de um novo objeto mergeando com mais objetos: `,Object.assign({},user, {age: 26}));

//////////////////////////////////////////////////////////////////////////

//previne todas as alterações do objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
console.log(newObj);

//////////////////////////////////////////////////////////////////////////

//seal não permite que crie ou delete, apenas altere a propriedade
const person = {name: 'guilherme'};
Object.seal(person);

person.name= 'guilherme aa';


/////////////////////////////////////////////////////////////////////////
//symbol são únicos

const symbol1 = Symbol('Name');
const symbol2 = Symbol('Name');

console.log('Symbol1 é igual a symbol2? ', symbol1 === symbol2);



