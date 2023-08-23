// Convertir una cadena a minúsculas
const test1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const test2 = "ESTO ES otra PruEBa"
const test3 = "The quiCk BROwn fox jUMps over The laZy dOG !'#$%&/())1234567890¿?"

// Solution 1
const myToLowerVersion = (theString) => {
    let theNewString = '';

    for (let i = 0; i < theString.length; i++) {
        if (theString.charCodeAt(i) >= 65 && theString.charCodeAt(i) <= 90) {
            // Debugging
            // console.log("Código original:", theString.charCodeAt(i));
            // console.log("Letra original:", String.fromCharCode(theString.charCodeAt(i)));
            // console.log("Código convertido:", theString.charCodeAt(i) + 32);
            // console.log("Letra convertida:", String.fromCharCode(theString.charCodeAt(i) + 32));
            // console.log("---------------")
            theNewString += String.fromCharCode(theString.charCodeAt(i) + 32);
        } else {
            theNewString += theString[i]
        }
    }

    return theNewString;
}

// console.log("Solution 2 - Test 1:\n", myToLowerVersion(test1));
// console.log("Solution 2 - Test 2:\n", myToLowerVersion(test2));
// console.log("Solution 2 - Test 3:\n", myToLowerVersion(test3));

// Solution 2
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const myToLowerVersionII = (theString) => theString.split("").map((char) => upperLetters.includes(char) ? lowerLetters[upperLetters.indexOf(char)] : char).join("");

console.log("Solution 2 - Test 1:\n", myToLowerVersionII(test1));
console.log("Solution 2 - Test 2:\n", myToLowerVersionII(test2));
console.log("Solution 2 - Test 3:\n", myToLowerVersionII(test3));