// Promise chaining:-

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Resolve after 2 seconds")
//         resolve(56)
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     //    let p2 = new Promise((resolve,reject)=>{
//        return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise 2")
//         },2000)
//     })
//     // return p2
// }).then((value)=>{
//     console.log(value, "we are done")
//     return 2
// }).then((value)=>{
//     console.log("Now we are pakka done")
// });

const loadScript = (src)=>{
    return new Promise((resolve,reject) =>{

        let script = document.createElement('script')
        script.type = "text/javascript"
        script.src= src
        document.body.appendChild(script)
        
        script.onload= ()=>{
            resolve ("Script is successfully loded")
        }
        script.onerror = ()=>{reject("this is an error")}
    })
    }

    // let p1 = loadScript("http://localhost:3000/index.js")
    let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
    p1.then((value)=>{
        console.log(value)
        return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js")
    }).then(()=>{
        console.log("second script is ready")
    })
    .catch((error)=>{
        console.log("this is an loadScript create error")
    })