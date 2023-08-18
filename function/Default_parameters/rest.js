// rest parameter:-The rest parameter syntex allows a function to accept an indefinite number of argument as an array,providing way to represent variadic functions in JavaScript.

// ex1:-

function sum(...args){
    // console.log(args)
    let result = 0;
    for(let i=0; i<args.length;i++){
        // result += args[i]
        result += args[i]
    }
    console.log(result)
}
sum()                         //0
sum(2,4,5,6);                 //17
sum(2,6,7,6,8);               //29

// ex:-2

function myfun(a,b,...manyMoreArgs){
    console.log("a",a);
    console.log("b",b);
    console.log("manymore",manyMoreArgs);
}
myfun("one","two","three","four","five","six");     //  a one 
                                                    //  b two
                                                    //  manymore [ 'three', 'four', 'five', 'six' ]

// ex:3

function multiply(multiplier, ...theArgs){
    return theArgs.map((element)=>
    multiplier*element);
}
const Arr=multiply(2,4,5,6,7);    // [8, 10, 12, 14 ]
console.log(Arr);

// ex:-4

function sortRestArgs(...theArgs){
    const sortedArgs = theArgs.sort();
    return sortedArgs;
}
console.log(sortRestArgs(5,6,4,6,2,1))  //[ 1, 2, 4, 5, 6, 6 ]