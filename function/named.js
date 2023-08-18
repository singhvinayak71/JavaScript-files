// Named function:- These types of function contains name at the time of definition;

// function sum(num1,num2){
//     return num1+num2
// }
// // console.log(sum(3,5))

// function func(){
//     console.log("Hello")
// }
// func();

//  let b= function squre(a){
// return a*a
//  }
//  console.log(b(8))

// NaN function

function number(num){
    if(isNaN(num)){
        return "Not a number";
    }
    return "Number"
}
// console.log(number('1000F'));
// console.log(number('1000'))

//Q:- what is the output of 10+20+"30" in JavaScript?

function display(){
    // console.log (10+20+"30")
}
// display();

// Q:- What is the output of "10+20+30" in JavaScript?
// Ans:- 102030 because afte a string all + will be treated as a string concatenation operator(not binary +)


// function display(){
    // console.log ("10"+20+30)
// }
// display();
// let myname;
// let v=function sayHello(){
//     // myname="Vinayak"
//     return "Hello"
// }
// console.log(v)
function sum(num1,num2){
    myname="vinayak"
    return num1+num2+ myname
}
console.log(sum(3,5))
