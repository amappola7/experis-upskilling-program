/**
 * Formatea los datos de la lista Imprime la lista en la consola, el resultado final debe ser el siguiente:

Valor: 0.25

const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];
El resultado esperado es el siguiente:

Grupo 1:
    Pablo
    Maria
    Pedro
Grupo 2:
    Diana
    Juan
    Federico
Grupo 3:
    Roberto
    Daniel
    Sandra
 */

const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];

// Version 1
// mat.forEach((group, index) => {
//     console.log(`Grupo ${index + 1}:`);
//     group.forEach(student => console.log(`  ${student}`));
// })

// Version 2
const formatData = (data) => data.map((group, index) => {return {group: index + 1, students: group}});

formatData(mat).forEach((grupo) => {
    console.log(`Grupo ${grupo.group}:`);
    grupo.students.forEach(student => console.log(`  ${student}`));
})