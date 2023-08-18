const loadScript= async (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script")
        script.src= src
        script.onload = () =>{
            resolve(src + "  Done success")
        }
        document.head.append(script)
    })
}

            // problem 1:-

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value)
//         console.log(new Date().getMilliseconds())
    
// })
 
            // problem 2:-

// const main = async()=>{
    // let a = await(loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"))
    //     console.log(new Date().getMilliseconds())
//     let a = await(loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"))
//     console.log(new Date().getMilliseconds())
// }
// main();

             // problem 3:-

// let p = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject(new Error("Please ths is not acceptable"))
//         }, 3000);
//     })
// }

// let a = async ()=>{
//     try{
//         let c = await p()
//         console.log(c)
//     }
//     catch(error){
//         console.log("This error has benn handled")
//     }
// }
// a()


// problem 4:-

let p1 = async ()=>{
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            resolve (10)
        }, 1000);
    })
} 
let p2 = async ()=>{
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            resolve (20)
        }, 2000);
    })
} 
let p3 = async ()=>{
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            resolve (30)
        }, 3000);
    })
} 

const run =async ()=>{
    console.time("run")
    let a1= await p1()
    console.log(a1)
    let a2= await p2()
    console.log(a2)
    let a3= await p3()
    console.log(a3)
    console.log(a1,a2,a3)
    console.timeEnd("run")
}
run()
