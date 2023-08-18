// Spread Opreater:- the JavaScript Spread Opreater (...) allows us to quickly copy all or part of an existing array or object into another array or object.

let array1 = [1,2,3];
let array2 = [5,4,6,...array1];
let array3 = [4,5,6];
let array4 = [...array1, ...array3]

console.log(array3)
console.log(array4)
