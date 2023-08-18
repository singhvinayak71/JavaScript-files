// const cars = ["Saab", "Volvo", "BMW"];
// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars.length)
// console.log(cars)
// console.log(cars.sort() )


// // Changing an Array Element:-
// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Opel";
// console.log(cars);


// // Array Elements Can Be Objects:-

// const myArray=[]
// myArray[0] = new Date().toLocaleDateString;
// myArray[1] = function myfunction(){
//     return "hello"
// };
// myArray[2] =  ["Saab", "Volvo", "BMW"];;

// console.log(myArray)




// // Looping Array Elements

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// // for (let i = 0; i < fLen; i++) {
// //   text += "<li>" + fruits[i] + "</li>";
// // }
// fruits.forEach((value)=>{
//     // text += "<li>" + value + "</li>";
//     text += `<li>${value}</li>`;
// })
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;



// //Adding Array Elements:-

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Lemon");

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";


// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";  // Creates undefined "holes" in fruits 
// console.log(fruits)



// //Associative Arrays:-

// const person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = 46;
// person.length;    // Will return 3
// person[0];        // Will return "John" 

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;     // Will return 0
// person[0];         // Will return undefined 

// console.log(person.firstName)
// console.log(person.lastName)



// JavaScript new Array():-
//These two different statements both create a new array containing 6 numbers:
// const points = new Array(40, 100, 1, 5, 25, 10);
// const point = [40, 100, 1, 5, 25, 10];



// How to Recognize an Array:-

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
console.log(Array.isArray(fruits));