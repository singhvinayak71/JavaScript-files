//-------- 1. Find the frequency of elements in array 
// let arr = ["HTML", "CSS", "JavaScript", "React", "MongoDb", "Node.js"]

// Method 1.
let arr = ["HTML", "CSS", "JavaScript", "React", "MongoDb", "Node.js", "MongoDb"]

// function count(p){
//     let results = p.reduce((allName, name) =>{
//         if(name in allName){
//             // console.log(allName)
//             allName[name]++
//             console.log(name);
//         }else{
//             allName[name] = 1
//         }
//         return allName
//     }, {})
//     return results
// }
// console.log(count(arr));

// Method 2. 

// function countWord(p){
//     let count = {};
//     p.forEach((item) => {
//         if(count[item]){
//             count[item]++
//             console.log(count[item])
//         } else {
//             count[item] = 1;
//         }
//     });
//     return count
// }
// console.log(countWord(arr));



//--------- 2. Group items on the basis of age of given array of object

let people = [
    { name: "Vinayak Singh", age: 21 },
    { name: "Max", age: 20 },
    { name: "Jone", age: 20 },
    { name: "Jone doe", age: 21 },
]

function groupBy(ar){
    let check = {};

    ar.forEach((item)=>{
        if(!check[item.age]) {
            check[item.age] = [item];
        } else {
            check[item.age].push(item)
        }
    })
    return check
}

console.log(groupBy(people))