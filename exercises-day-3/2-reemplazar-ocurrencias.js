// Reemplazar todas las ocurrencias de un caracter en una cadena

// Solution 1.0
// const replaceChars = (theString, oldChar, newChar) => {
//     const chars = theString.split("");
//     const newChars = chars.map((char) => char === oldChar ? newChar : char);
//     return newChars.join("");
// }
const replaceChars = (theString, oldChar, newChar) => theString.split("").map((char) => char === oldChar ? newChar : char).join('');
console.log("Solution 1.0: " , replaceChars("What you won't do, for love", "o", "💗"));

// Solution 2.0
function replaceCharsII(theString, oldChar, newChar) {
    let newString = '';

    for (let i = 0; i < theString.length; i++) {
        if (theString[i] === oldChar) {
            newString += newChar;
        } else {
            newString += theString[i];
        }
    }

    return(newString)
}

console.log("Solution 2.0: ", replaceCharsII("A goddamn vampire", "v", "🧛🏻‍♀️"));

// Solution 2.1
function replaceCharsIII(theString, oldChar, newChar) {
    let newString = '';
    let i = 0;

    do {
        if (theString[i] === oldChar) {
            newString += newChar;
        } else {
            newString += theString[i];
        }

        i++;

    } while(i < theString.length)

    return(newString)
}

console.log("Solution 2.1: ", replaceCharsII("En el patio del vecino", "o", "🌿"));

// Solution 1.1 - Incompleta
const replaceCharsCaseSensitive = (theString, oldChar, newChar) => {
    const chars = theString.split("");
    const newChars = chars.map((char) => char === oldChar || char.charCodeAt(0) - 27 == oldChar.charCodeAt(0) ? newChar : char);
    return newChars.join("");
}

console.log("Solution 1.1: " , replaceCharsCaseSensitive("What you won't do, for love", "w", "💗"));





































// function replaceCharsII(theString, oldChar, newChar) {
//     let newString = '';

//     for (let i = 0; i < theString.length; i++) {
//         if (theString[i] === oldChar) {
//             newString += newChar;
//         } else {
//             newString += theString[i];
//         }
//     }

//     return(newString)
// }

// console.log("Solution 2: ", replaceCharsII("A goddamn vampire", "v", "🧛🏻‍♀️"));