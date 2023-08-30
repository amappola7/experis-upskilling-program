// Solution 1
const descendingOrderI = (num) => {
    if ((typeof num !== "number" || isNaN(num)) && num > 0) throw "Invalid argument type";
    return parseInt(num.toString(10).split('').sort().reverse().join(""));
};

// console.log(descendingOrderI(42145));

// Version 3

const findingTheMaxValue = (numsArray) => {
    let maxValue = 0;
    let i = 0;

    while(i < numsArray.length) {
        if(numsArray[i] > maxValue) maxValue = numsArray[i];
        i++;
    }

    return maxValue;
};

const findingTheMinValue = (numsArray, maxValue) => {
    let minValue = maxValue;
    let i = 0;

    while(i < numsArray.length) {
        if(numsArray[i] < minValue) minValue = numsArray[i];
        i++;
    }

    return minValue;
};

const sorting = (numsArray, order) => {
    const arrayBackup = [...numsArray];
    const arraySorted = [];
    const maxValue = findingTheMaxValue(numsArray);
    let i = 0;

    while (i < numsArray.length) {
        console.log(arrayBackup);
        const maxValue = findingTheMaxValue(arrayBackup);
        arraySorted.push(maxValue);
        arrayBackup.splice(1,numsArray[i]);
        i++;
    }

    return arraySorted;
}


console.log(sorting([1,2,3,4]), 1);






































// // Solution 2 - Mi Némesis
// const descendingOrderII = (num) => {
//     if (typeof num !== "number" || isNaN(num)) throw "Invalid argument type";
//     const stringifiedNum = num.toString();
//     let result = stringifiedNum[0];

//     for(let i = 1; i < stringifiedNum.length; i++){
//         console.log(stringifiedNum[i]);
//         let backup = result;
//         for(let ii = 0; ii < result.length; ii++) {
//             console.log("Iteración", ii, result);
//             if (stringifiedNum[i] < result[ii]) {
//                 // console.log(result[ii]);
//                 result = stringifiedNum[i] + result[ii];
//             } else {
//                 result = result[ii] + stringifiedNum[i];
//             }

//         }
//     }

//     return result;
// }

// console.log(descendingOrderII(123));
// console.log(descendingOrderII(456));
