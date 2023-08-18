// Sorting an Array:-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();   // The sort() method sorts an array alphabetically:
// console.log(fruits)

// Reversing an Array:-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.sort();
// fruits.reverse();
// console.log(fruits)

// const points = [40, 100, 1, 5, 25, 10];
// // points.sort()
// points.sort((a, b) => {
//   return a - b;
// });
// console.log(points);

const points = [40, 100, 1, 5, -25, 10];
points.sort(function(a, b){return b - a});
document.getElementById('demo').innerHTML= points
console.log(points);

const fun1 = ()=>{
    points.sort();
    document.getElementById('demo')= points
}
function1()

