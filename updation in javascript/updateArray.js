// In javascript you can update arrays using various methods:



// 1. You can directly assign new value to a specific index in the array.
let arr = [1, 2, 3];
arr[0] = 20; // Update the first element to 20



// 2. push() and pop(): "push()" adds the elements to the end of an array, while "pop()" removes the last element
let arr1 = [4, 5, 6];
arr1.push(7); // Adds 7 to the end of array
console.log(arr1); // [ 4, 5, 6, 7 ]
arr1.pop(); // removes the last element()
console.log(arr1); //  [ 4, 5, 6 ]



// 3. unshift() and shift(): "unshift()" adds elements to the beginning of an array, While "shift()" removes the first element.
let arr2 = [2, 3];
arr2.unshift(1); // Adds 1 to the beginnig of the array
arr2.shift() // removes the first element



// 4. splice(): "splice()" can be use to add, remove, or replade elements at the position in the array
let arr3 = [1, 2, 3, 4];
arr3.splice(2,1, 'a', 'b'); // Removes 1 element start from index 2 and inserts "a" and "b"



// 5. map(): "map()" creates a new array by applying a function to each element of the original array
const words = ['hello', 'world', 'javascript'];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords); // ['HELLO', 'WORLD', 'JAVASCRIPT']


// 6. filter(): The filter() method in JavaScript is used to create a new array with all elements that pass the test implemented by the provided function. It doesn't modify the original array.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.filter(item => item % 2 === 0); //Filter even numbers: [2, 4, 6, 8, 10]