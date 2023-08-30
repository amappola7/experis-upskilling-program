// Calcular el factorial de cualquier número

// // Version 1
const numberFactorial = (num) => {
    if (num == 1) {
        return num;
    } else {
        return numberFactorial(num - 1) * num;
    }
};

// console.log(numberFactorial(8));

// Version 2
const numberFactorialII = (num) => {
    let result = num;

    for(let i = num - 1; i > 0; i--) {
        result *=  i;
    }

    return result;
};

// console.log(numberFactorialII(5))

// Version 3
const numberFactorialIII = (num) => {
    let result = num;
    let i = num - 1;

    while(i > 0) {
        result *= i;
        i--;
    };

    return result;
};

// console.log(numberFactorialIII(8));

// Version 4
const numberFactorialIV = (num) => {
    const numbers = [];

    for (let i = num; i > 0; i--) {
        numbers.push(i);
    };

    const result = numbers.reduce((accumulator, num) => accumulator * num);

    return result;
};

// console.log(numberFactorialIV(8));