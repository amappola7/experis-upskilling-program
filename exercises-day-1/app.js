/*
1. Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).

2. Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).

3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.
*/

const evalApprovedOrNot = (grade) => {
    return grade >= 3.5 ? "Aprobado" : "Reprobado";
};

const gradesAverage = (grade1, grade2, grade3) => {
    return ((grade1 + grade2 + grade3) / 3);
}

const alumnResultPerSubject = () => {
    const gradesAndSubjects = {};

    for(let i = 1; i < 4; i++) {
        let grade = parseFloat(prompt(`Ingresa la calificación ${i}: `));
        let grades = `grade${i}`;
        gradesAndSubjects[grades] = grade;
    }

    const finalGrade = gradesAverage(gradesAndSubjects.grade1, gradesAndSubjects.grade2, gradesAndSubjects.grade3).toFixed(2);
    return finalGrade;
}

const studentFinalResult = () => {
    let studentName = prompt("¡Bienvenido al sistema de evaluación escolar! \n Ingresa el nombre del alumno: ");
    const subjects = {};

    for(let i = 1; i < 4; i++) {
        let subject = prompt(`Ingresa el nombre de la materia ${i}: `);
        let subjectResult = alumnResultPerSubject();
        subjects[subject] = `${subjectResult} → ${evalApprovedOrNot(subjectResult)}`;
    }

    return subjects;
}


// Punto 1
// console.log(evalApprovedOrNot(prompt("Ingresa la calificación:")))

// Punto 2
// const result = alumnResultPerSubject();
// console.log(`La nota final del estudiante es ${result}, su estado es ${evalApprovedOrNot(result)}`);

// Punto 3
console.table(studentFinalResult());



