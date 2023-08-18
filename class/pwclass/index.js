// function getPerson(name , age){
//     this.name = name;
//     this.age = age;
//     try{
//         if(name == undefined || age == undefined){
//             throw new Error("Invalid Parameter type")
//         }else{
//             return (`Name : ${this.name} , Age : ${this.age}`)
//         }
//     }catch(err){
//         return err.message
//     }
// }


// console.log(getPerson("vinayak singh"))
console.log(getPerson("vinayak singh" , 23))

// let name = ""
// let age = 50;
// try{
//     if(name == ''){
//         throw new Error("Not a valid name")
//     }
//     console.log(name , age)
// }catch(err){
//     console.log(err.message)

let getPerson = {
    name: 'vinayak singh',
    age: 27,
    getname: function(){
        console.log(`person name is ${this.name} and his age is ${this.age}`)
    }
}

console.log(getPerson.name)