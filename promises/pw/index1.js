const car = function(){
    return new Promise((resolve , reject)=>{
        resolve( ` this car has enough fuel`)
    })
}
const carsTyre = function(msg){
    return new Promise((resolve , reject)=>{
        resolve( msg + ` This car has good mentained tyres and stapanies`)
    })
}
car().then(function(result){
    console.log(`Prosesing.....`)
    setTimeout(()=>{
        console.log(result)
        console.log(`Now check tyres conditions`)
        return car(result)
    }, 2000)
}).then(function(result){
    setTimeout(()=>{
        console.log(`checking tyres condition..........`)
        console.log(result)
        return carsTyre(result)
    }, 4000)
}).then(function(result){
    setTimeout(() => {
        console.log("done!" + result)
    }, 7000);
})