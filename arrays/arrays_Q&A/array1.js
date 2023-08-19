// 1. Find the frequency of elements in array 
// let arr = ["HTML", "CSS", "JavaScript", "React", "MongoDb", "Node.js"]

let arr = ["HTML", "CSS", "JavaScript", "React", "MongoDb", "Node.js", "MongoDb", "mongodb"]

function count(p){
    let results = p.reduce((allName, name)=>{
        if(name in allName){
            allName[name]++
        }else{
            allName[name] = 1
        }
        return allName
    }, {})
    return results
}

console.log(count(arr))