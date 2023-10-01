// The map is a collection of key-value pairs that can use any type of data as a key or value. 

const mapObj = new Map([
    ['name' , 'vinayak singh'],
    [10 , 'this is a number value'],
    [true , 'this is boolean value'],
])
console.log(mapObj.get(10));



const myMap = new Map();
myMap.set( 1 , "one");  // set is used to add or update the value with key and value
myMap.set( 2 , "two")
// console.log(myMap.get(1))   
myMap.delete(1) 
// console.log(myMap) 


const myMap1 = new Map([
    [ 1 , "One"],
    [ "Two" , 2],
    [ "Three" , "3"]
]);
// console.log(myMap1.keys())    
// console.log(Array.from(myMap.keys()));


const myMap2 = new Map([
    [ 1 , "One"],
    [ "Two" , 2],
    [ "Three" , "3"]
]);
// console.log(myMap2.values())   // get list of items
// console.log(Array.from(myMap2.values()));



const myMap3 = new Map([
    [ 1 , "One"],
    [ "Two" , 2],
    [ "Three" , "3"]
]);
// console.log(myMap.entries())      //   returns an object of Map iterator that contains the key-value pair for each element
// console.log(Array.from(myMap.entries()))


const myMap4 = new Map([
    [ 1 , "One"],
    [ "Two" , 2],
    [ "Three" , "3"]
]);
// console.log(myMap4.size)


//------ has method
const myMap5 = new Map([
    [ 1 , "One"],
    [ "Two" , 2],
    [ "Three" , "3"]
]);
console.log(myMap5.has("Two"))  // true
console.log(myMap5.has(2))