let arr= [3,5,6,7,8,91,564]

// No need to do this

// let a = arr[0]
// let b = arr[1]

// let [a,b,c,d, ...rest]= arr;
// console.log(a,b,c,d, rest);


// let [a, , c, b, ...rest]= arr;
// console.log(a,b,c, rest);

// let {a,b} = {a:1, b:4}
// console.log(a,b)


// Spread Oprater

let arr1 = [3,5,8]

let obj1= {...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3;
}
console.log(sum(...arr1))

let obj2= {
    name: "Kapil",
    company:"company xyz",
    address: "xyz"
}

console.log({...obj2, name:"Vinayak"})