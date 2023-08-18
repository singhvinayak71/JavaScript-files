// Converting Arrays to Strings:-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// fruits.toString();
// const fruit = fruits.join(" * ");
// console.log(fruit)

// JavaScript Array pop():-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.pop();
// console.log(fruit)

// JavaScript Array push():-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruit = fruits.push("Kiwi");
// console.log(fruit)     // push method returns new array length
// console.log(fruits)


// JavaScript Array shift():-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruit = fruits.shift();  // shift mathod return the shift value
// console.log(fruit)


// JavaScript Array unshift():-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits)


// JavaScript Array length:-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";  //The length property provides an easy way to append a new element to an array:
// console.log(fruits)


// JavaScript Array delete():-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits)

// Merging (Concatenating) Arrays:-

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)


// Example (Merging Three Arrays):-

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren)

// Example (Merging an Array with Values):-

// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter");  
// console.log(myChildren)



// JavaScript Array splice():-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1, "Lemon", "Kiwi");
// console.log(fruits)
// console.log(fruits.length)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1);
// console.log(fruits)



// // JavaScript Array slice():-
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);
// console.log(citrus)
// console.log(fruits)
// console.log(citrus.length)

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0, fruits.length-1);
console.log(fruits)
console.log(citrus)




