// let car = new Promise(function(resolve , reject){
//     // fuel_tank = true;
//     fuel_tank = false;
//     if(fuel_tank){
//         resolve()
//     }
//     else{
//         reject()
//     }
// });
// car.then(function(){
//     console.log(`fuel tank is full happy drive`)
// }).catch(function(){
//     console.log(`hte fuel tank is not empty`)
// })

let empty_tank = function(){
    return new Promise((resolve , reject)=>{
        console.log(`Checking......`)
        setTimeout(() => {
            resolve(`the car doesn't have enough fuel. ` )
        }, 2000);
        
    })
}
let engine = function(msg){
    return new Promise((resolve , reject )=>{
    setTimeout(() => {
        resolve(msg + 'the engine is over heating. ')
    }, 3000);
    })
}
let traval = function(msg){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            
            resolve(msg + "this car is not safe for driving. ")
        }, 4000);
    })
}
empty_tank().then(function(result){
    return engine(result)
}).then(function(result){
    return traval(result)
}).then(function(result){
    console.log('Done! '+ result)
})