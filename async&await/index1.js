// async function fan() {
    
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//             let myName= "Vinayak singh";
//             // console.log("My name is", myName)
//             resolve("My name is "+ myName)
//         }, 2000);
//     })
// }

// async function fan2(){
//     return new Promise((resolve,reject)=>{
//     resolve("And i am living in the satna district")
//     })
// }
// async function fan3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("I can do it")
//         }, 3000);
//     })
// }

// const run= async ()=> {
//     console.log(await fan())
//     console.log( await fan3() )
//     console.log(await fan2())
// }
// run();

// async function harry() {
//     let delhiWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("27 Deg")
//             }, 2000)
//     })

//     let bangaloreWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("21 Deg")
//             }, 5000)
//     })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
//     console.log("Fetching Delhi Weather Please wait ...")
//     let delhiW = await delhiWeather
//     console.log("Fetched Delhi Weather: " + delhiW)
//     console.log("Fetching Bangalore Weather Please wait ...")
//     let bangaloreW = await bangaloreWeather
//     console.log("Fetched Bangalore Weather: " + bangaloreW)
//     return [delhiW, bangaloreW]
// }

const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()

}
main1()

console.log("first")