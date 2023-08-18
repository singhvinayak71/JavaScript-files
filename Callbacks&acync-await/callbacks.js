function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();
// console.log("hello i am callback")

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// let result = myCalculator(5, 5);
let result = myCalculator(5, "15");
myDisplayer(result);


let fruit = function fruits(f1, f2){
  
}