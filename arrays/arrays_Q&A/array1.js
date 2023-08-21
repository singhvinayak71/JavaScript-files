//-------- 1. Find the frequency of elements in array 
// let arr = ["HTML", "CSS", "JavaScript", "React", "MongoDb", "Node.js"]

// Method 1.
// let arr = ["HTML", "CSS", "JavaScript", "React", "MongoDb", "Node.js", "MongoDb"]

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

// let people = [
//     { name: "Vinayak Singh", age: 21 },
//     { name: "Max", age: 20 },
//     { name: "Jone", age: 20 },
//     { name: "Jone doe", age: 21 },
// ]

// function groupBy(ar){
//     let check = {};

//     ar.forEach((item)=>{
//         if(!check[item.age]) {
//             check[item.age] = [item];
//         } else {
//             check[item.age].push(item)
//         }
//     })
//     return check
// }

// console.log(groupBy(people));




//---------- 3. Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)

// let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function twoSum(ar, target){
//     let hash = [];
//     let sum = [];
//     ar.forEach((item)=>{
//         let diff = target - item;
//         if(hash[diff] !== undefined){
//             sum.push([item, diff])
//         }
//         hash[item] = item
//     });
//     return sum
// }
// console.log(twoSum(ar, 9));


//--------- 4. Print all duplicate elements of an array

let arr2 = [1, 2, 2, 3, 4, 5, 6, 8, 9, 7, 8, 9]

function duplicates(ar){
    let results = ar.filter((item, index)=>{
        return ar.indexOf(item) !== index;

    })
    return results
}
console.log(duplicates(arr2))