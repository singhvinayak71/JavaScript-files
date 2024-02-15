// How to search an array??

// With .find(..) method - The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
const pets = ["cat", "dog", "bird", "dog"];

const dog = pets.find(pet => pet === "dog");
console.log(dog);  // dog

const cat = pets.find(pet => pet === "cat");
console.log(cat);  // cat

const fish = pets.find(pet => pet === "fish")
console.log(fish);  // undefined



// With .filter(..) method - return a new array with elements that pass a condition given by a callback function
const numbers = [1, 8, 2, 18, 2, 20];

const twos = numbers.filter((num) => num === 2);
console.log(twos);  // [2, 2]

const doubleDigits = numbers.filter((num) => num > 9)
console.log(doubleDigits);  // [ 18, 20 ]

const hundreds = numbers.filter((num) => num > 100);
console.log(hundreds);  // []



// With .includes(..) method - Returns true if an array contains the value, otherwise returns false
const fruits = ["apple", "banana", "orange", "banana"]
const hasBanana = fruits.includes("banana");
console.log(hasBanana); // true

const hasApple = fruits.includes("apple");
console.log(hasApple);  // true

const hasLemon = fruits.includes("lemon");
console.log(hasLemon);  // false


// With .indexOf(..) method - Find the first element that matches a value and returns the index of that element, If not elements match, it returns -1
const fruit = ["apple", "banana", "orange", "banana"];
const bananaIndex = fruit.indexOf("banana");
console.log(bananaIndex);

const lemonIndex = fruit.indexOf("lemon")
console.log(lemonIndex)