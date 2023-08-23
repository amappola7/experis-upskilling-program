// Contar el número de caracteres de una cadena

const theString = "What you won't do for love";

// Solution 1
console.log("Solution 1: " , theString.length);

// Solution 2
let i = 0;
while(true) {
    if(theString[i] === undefined){
        break}
    i++;
}

console.log("Solution 2: ", i);