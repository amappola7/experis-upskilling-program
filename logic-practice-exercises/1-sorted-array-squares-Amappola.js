// Squares of a Sorted Array
// Link: https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) =>
nums
    .map((num) => Math.pow(num, 2))
    .sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
    });

const test1 = [-4, -1, 0, 3, 10];
const test2 = [-7, -3, 2, 3, 11];

console.log("Test 1:", sortedSquares(test1));
console.log("Test 2:", sortedSquares(test2));


// Solution 2
// Power numbers
const powerNumbers = function (nums) {
    const poweredNumbers = [];

    for(let i = 0; i < nums.length; i++){
        poweredNumbers[i] = nums[i] * nums[i];
    };

    return poweredNumbers;
};

// Attempt 1
// const sortFunction = (nums) => {
//     const sortedArray = [];

//     for(let i = 0; i < nums.length; i++) {
//         if (sortedArray.length == 0) {
//             sortedArray[0] = nums[i];
//         } else  {
//             for (let ii = 0; 0 < sortedArray.length; ii++) {
//                 if(nums[i] < sortedArray[ii] || nums[i] == sortedArray[ii]){
//                     sortedArray[ii + 1] = sortedArray[ii];
//                     sortedArray[ii] = nums[i];
//                 } else {
//                     sortedArray[ii - 1] = sortedArray[ii];
//                     sortedArray[ii] = nums[i];
//                 }
//             }
//         }
//     }
//     return sortedArray;
// }

// Attempt 2
// const sortFunction = (nums) => {
//     const sortedArray = [];

//     for(let i = 0; i < nums.length; i++) {
//         if (sortedArray.length == 0) {
//             sortedArray[0] = nums[i];
//         } else  {
//             for(let ii = 0; ii < nums.length; ii++) {
//                 if(sortedArray[ii] > nums[i]) {
//                     sortedArray.unshift(nums[i]);
//                 } else {
//                     sortedArray.splice(ii + 1 ,0,nums[i]);
//                 }
//             }
//         }
//     }
//     return sortedArray;
// }

// Attempt 3
// const sortFunction = (nums) => {
//     const sortedArray = [];
//     const positionsCache = {};
//     let lastPosition = 0;

//     for(let i = 0; i < nums.length; i++) {
//         if (i == 0) {
//             positionsCache[0] = nums[i];
//         } else {
//             if(nums[i] < positionsCache[lastPosition]) {
//             }
//         }
//     }

//     return sortedArray;
// }

console.log("Test 1:", powerNumbers(test1), "\nResult 1: ", sortFunction(powerNumbers(test1)));
console.log("-------------------------------------------------------------------------------");
console.log("Test 2:", powerNumbers(test2), "\nResult 2: ", sortFunction(powerNumbers(test2)));