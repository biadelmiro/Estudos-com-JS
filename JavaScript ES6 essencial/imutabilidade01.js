const students =[
    {
        name: 'Ana',
        grade: 9
    },
    {
        name: 'Paul',
        grade: 5
    },
    {
        name: 'Elisa',
        grade: 7
    }
];

//Variável que é um array de objetos

function getApprovedStudents(studentList){
    return studentList.filter(student => student.grade >= 7);
}

//essa função getApprovedStudents faz um filtro no qual apenas estudantes que tiraram maior do que 7 apareçam

console.log('Alunos Aprovados: ');
console.log(getApprovedStudents(students));

// Aqui eu imprimo a getApprovedStudents e chamo a constante students e ela aparece apenas os aprovados

console.log('\nLista de Alunos completa:');
console.log(students);