/**
 * Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).

Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).

Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.
 */

class SubjectReport {
    constructor(grades, subjectName) {
        this.subjectName = subjectName;
        this.grades = grades;
        this.finalGrade = 0;
    }

    evalApprovedOrNot(grade) {
        return grade >= 3.5 ? true : false;
    };

    calculateFinalGrade() {
        let result = 0;
        this.grades.forEach(grade => {result += grade});
        this.finalGrade = result / this.grades.length;
        return result / this.grades.length;
    }
};

class StudentReport {
    constructor(name, subjectsResults) {
        this.studentName = name;
        this.subjectsResults = subjectsResults;
    }

    finalReport() {
        let results = [];
        this.subjectsResults.forEach((subject) => {
            let subjectInfo = {
                name: subject.subjectName,
                finalGrade: subject.calculateFinalGrade(),
                status: subject.evalApprovedOrNot(subject.finalGrade)
            };

            results.push(subjectInfo);
        });

        return results;
    }
};

// Using DOM
const selectors = {
    subject1Grade2: document.querySelector("#subject1-grade1"),
    subject2Grade1: document.querySelector("#subject1-grade2"),
    subject1Grade1: document.querySelector("#subject1-grade3"),
    subject2Grade2: document.querySelector("#subject2-grade1"),
    subject1Grade3: document.querySelector("#subject2-grade2"),
    subject2Grade3: document.querySelector("#subject2-grade3"),
    subject3Grade1: document.querySelector("#subject3-grade1"),
    subject3Grade2: document.querySelector("#subject3-grade2"),
    subject3Grade3: document.querySelector("#subject3-grade3"),
    submitButton: document.querySelector("#submit-button")
};

selectors.submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const mathematics = new SubjectReport([parseFloat(selectors.subject1Grade1.value), parseFloat(selectors.subject1Grade2.value), parseFloat(selectors.subject1Grade3.value)], "Math");
    const literature = new SubjectReport([parseFloat(selectors.subject2Grade1.value), parseFloat(selectors.subject2Grade2.value), parseFloat(selectors.subject2Grade3.value)], "Literature");
    const science = new SubjectReport([parseFloat(selectors.subject3Grade1.value), parseFloat(selectors.subject3Grade2.value), parseFloat(selectors.subject3Grade3.value)], "Science");

    const amappolaReport = new StudentReport("Amappola", [mathematics, literature, science]);
    const amappolaFinalReport = amappolaReport.finalReport();
    console.log(`\n${amappolaReport.studentName} Final Report:`);
    amappolaFinalReport.forEach((subject) => {
        console.log(`----------\n${subject.name}\nFinal Grade: ${subject.finalGrade.toFixed(2)}\nStatus: ${subject.status ? "Approved" : "Reprobate"}`)
    })
});

// Using direct values
/**
const mathematics = new subjectReport([3.4, 5.0, 4.6], "Math");
const mathematicsFinalGrade = mathematics.calculateFinalGrade();
const mathematicsApprovedStatus = mathematics.evalApprovedOrNot(mathematicsFinalGrade);
console.log(`Math Status: ${ mathematicsApprovedStatus ? "Approved" : "Reprobate"}\nFinal Grade: ${mathematicsFinalGrade.toFixed(2)}`);

const literature = new subjectReport([2.5, 4.6, 3.8], "Literature");
const literatureFinalGrade = literature.calculateFinalGrade();
const literatureApprovedStatus = literature.evalApprovedOrNot(literatureFinalGrade);
console.log(`Literature Status: ${ literatureApprovedStatus ? "Approved" : "Reprobate"}\nFinal Grade: ${literatureFinalGrade.toFixed(2)}`);

const science = new subjectReport([1.8, 2.0, 3.6], "Science");
const scienceFinalGrade = science.calculateFinalGrade();
const scienceApprovedStatus = science.evalApprovedOrNot(scienceFinalGrade);
console.log(`Science Status: ${ scienceApprovedStatus ? "Approved" : "Reprobate"}\nFinal Grade: ${scienceFinalGrade.toFixed(2)}`);

const amappolaReport = new studentReport("Amappola", [mathematics, literature, science]);
const amappolaFinalReport = amappolaReport.finalReport();
console.log(`\n${amappolaReport.studentName} Final Report:`);
amappolaFinalReport.forEach((subject) => {
    console.log(`----------\n${subject.name}\nFinal Grade: ${subject.finalGrade.toFixed(2)}\nStatus: ${subject.status ? "Approved" : "Reprobate"}`)
});
 */


