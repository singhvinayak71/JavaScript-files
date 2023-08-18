const sum = document.getElementById('sum');
const sub = document.getElementById('sub');
const div = document.getElementById('div');
const mult = document.getElementById('mult');

// sum of two numbers
function addition(num1,num2){
    return num1+num2;
}
const addSpan =addition(5,4);
sum.innerHTML = addSpan;


// substraction of two numbers
function subtraction(num1,num2){
    return num1-num2;
}
const subSpan = subtraction(10,5);
sub.innerHTML = subSpan;


// Division of two numbers
function division(num1,num2){
    return num1/num2;
}
const divSpan = division(455,15).toFixed(3);
div.innerHTML = divSpan;



// multiplication of two numbers
function multiplication(num1,num2){
    return num1*num2;
}
const multSpan= multiplication(65,3);
mult.innerHTML = multSpan;
