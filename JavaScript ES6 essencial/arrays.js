const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
]; 

//retornar a quantidade de itens de um array
console.log('items: ', persons.length);

//verificar se é um array
console.log('A variável persons é um array? ', Array.isArray(persons));

//interar os items do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

//filter array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nLista apenas com homens: ', mens);

//retorna um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JS';
    return person;
});

//transformar o array em outro tipo
const totalAge = persons.reduce((age, person) =>{
    age += person.age;
    return age;
},0);

console.log('\nSoma de idade das pessoas ', totalAge);

//juntando Operações

const totalEvenAges = persons
    .filter(person => persons.age % 2 === 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    },0);

console.log('\nSoma de idades das pessoas que possuem idade par ', totalEvenAges);