// Question 1 : Find the Product
function Find_Prod(arr) {
    return arr.reduce((prod, val) => prod * val, 1);
}
// Example
console.log(Find_Prod([1, 2, 3, 4, 5])); // Output: 120

// Question 2 : Find the Sum
function Find_Sum(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
}
// Example
console.log(Find_Sum([1, 2, 3, 4, 5])); // Output: 15

// Question 3: Find the Occurances
function findCount(arr, K) {
    return arr.filter(val => val === K).length;
}
// Example
console.log(findCount([3, 3, 1, 2], 3)); // Output: 2

// Question 4: Find the Even or Odd Number
function findEvenOdd(arr) {
    let even = 0, odd = 0;
    arr.forEach(val => {
        if (val % 2 === 0) even += val;
        else odd += val;
    });
    return [even, odd];
}
// Example
console.log(findEvenOdd([1, 2, 3, 4, 5, 6, 7])); // Output: [12, 16]

// Question 5: Find whether the number is present or not
function Find_Num(arr, num) {
    return arr.includes(num) ? "YES" : "NO";
}
// Example
console.log(Find_Num([1, 2, 3, 4, 5], 2)); // Output: YES

// Question 6: Find the Age greater than or equal to 18
function highAge(arr) {
    return arr.filter(age => age >= 18);
}
// Example
console.log(highAge([11, 23, 3, 45, 72, 68])); // Output: [23, 45, 72, 68]

// Question 7: Increment the Array Elements
function Inc_Arr(arr) {
    let incremented = arr.map(val => val + 1);
    console.log(incremented.join(' '));
}
// Example
Inc_Arr([1, 2, 3, 4, 5]); // Output: 2 3 4 5 6

// Question 8: Pass or Fail
function isAllPass(arr) {
    return arr.every(marks => marks >= 32) ? "YES" : "NO";
}
// Example
console.log(isAllPass([13, 89, 45, 98, 67, 45, 54])); // Output: NO

// Question 9: Unique Color Shirts
function uniqueShirts(arr) {
    let map = {};
    arr.forEach(color => {
        map[color] = (map[color] || 0) + 1;
    });

    return Object.values(map).filter(count => count === 1).length;
}
// Example
console.log(uniqueShirts([3, 2, 4, 1, 2, 3])); // Output: 2

// Question 10: Fint the Min and Max
function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
}
// Example
console.log(minMax([66, 33, 11, 44, 66, 22, 77])); // Output: [11, 77]