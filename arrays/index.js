// 1:-find duplicates in array

// const arr= ["😂","🦣","🐁","🦣","🦡","🍑","🍋","🍌","🍉","🍉","🍉"]
// console.log(arr)
// let s = new Set(arr)
// let arr2 = [...s]
// console.log(arr2)

// const hasmap = {};
// arr.forEach(it=>{
//     if(it in hasmap){
//         hasmap[it]++;
//     }
//     hasmap[it]=1;
// })

// for(let key in hasmap){
//     if(hasmap[key]>1)
//     console.log(key)
// }
// console.log(hasmap)

// 2:-
let myArr = [1, 2, 3, 4, 5, 6, 7];
let myArr2 = [9, 10, 11];
// console.log(myArr[myArr.length - 1]);
// for (var i = 0; i < myArr.length; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(myArr[i])
// }

// myArr.forEach(function (element) {
  //   console.log(element);
// });

// 3:-
// let s = null;
// console.log(`Total index number is = ${myArr.length}`);
// // myArr.pop();                                 //Remove last element at the end
// myArr.push("vinayak"); //Add a new element at the end
// myArr.shift();                                  // Remove first element and return it
// myArr.unshift("vinayak singh");                 //Add a new element at the end of array
// console.log(myArr);
// console.log(`Now Total index number is = ${myArr.length}`);
// console.log(typeof s);
// // console.log(myArr.join("_"));                   // Join all the array elements using a separator
// console.log(myArr.concat(myArr2));                 // use to join array to the given array

// let arr = [1, 2, 3, 4, 5, 4, 4, 7, 7, 5, 5, 6, 8, 10];

// let arr2 = arr.filter((value) => value % 3 === 0);
// console.log(arr2);
// let arr3 = arr2.concat(arr,`hello`);
// console.log(arr3);

// const firstname = ["vinayak"]
// const lastname = ['singh'];
// const fulname = ['somvanshi']

// // console.log(`${firstname} ${lastname} ${fulname}`)
// let myname = firstname.concat(lastname);
// console.log(myname)

// const one = "Hello, "; const two = "how are you?"; const joined = `${one}${two}`;
// console. log(joined);

// function myfun(){
//   let name = "vinayak";
//   let fullname = name.concat(" singh", " somvanshi")
//   console.log(fullname)
// }
// myfun();

// console.log('It'.concat(' is',' a',' great',' day.'));

// let num1 = [11,12,13]
// let num2 = [14, 15, 16]
// let num3 = [17, 18, 19];

// num1.push("hello")
// console.log(num1)

// let fname = ['vivek', 'vinayak', 'shubham', 'shivam'];
// let midname = "kumar";
// let lastname = "_singh ";

// let fullname = fname.join(`${lastname}`)
// let fullname = fname.concat(`${lastname}`)
// console.log(fullname)

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = [1, 2, 3];
// const arr3 = arr1.concat(arr2);

const arr1 = [1, 2, [3, 4]];
const arr2 = [[5, 6], 7, 8];
const arr3 = arr1.concat(arr2);
// console.log(arr3)

// const fruit = [];
// fruit.push("Apple", "Banana","Mango");
// console.log(fruit.length);
// fruit[5] = "Lemon";
// console.log(Object.keys(fruit));


function arr() {
  let results = [];
  for (let i = 0; i < arguments.length; i++) {
      results.push(arguments[i] * 15);
  }
  return results;
}
let fruits = arr(15, 22, 25);
console.log(fruits);

// I AM AN ENTHUSIASTIC, SELF-MOTIVATED, RELIABLE, RESPONSIBLE AND HARD WORKING PERSON. I AM A MATURE TEAM WORKER AND ADAPTABLE TO ALL CHALLENGING SITUATIONS. I AM ABLE TO WORK WELL BOTH IN A TEAM ENVIRONMENT AS WELL AS USING OWN INITIATIVE. I AM ABLE TO WORK WELL UNDER PRESSURE AND ADHERE TO STRICT DEADLINES
// https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZ7Mmd99bb0WvHxsL_S_BBC0bRZxvhek0AwSvkm5cA3gXwCA/formResponse