// let p1 = new Promise((resolve, reject)=>{
//     console.log("p1 is pending")
//     setTimeout(()=>{
//         // console.log("p1 is fullfiled")
//         resolve(true)
//     },2000)
// })


// let p2 = new Promise((resolve ,reject)=>{
//     console.log("p2 is  pending")
//     setTimeout(()=>{
//         // console.log("p2 is fullfiled")
//         reject(new Error("p2 is rejected"))
//     },2000)
// })

// p1.then((value)=>{
// console.log(value)
// })


// p2.then((value)=>{
//     console.log('p1 is resolved with value: ',value)
// }).catch((error)=>{
//         console.log("p2 has found some error in the script")
//     })
// // p2.catch((error)=>{
// //     console.log("we have found some error in the script")
// // })

// console.log(p1,p2);


// function createPromise(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(10)
//             // reject(10)
//             console.log('timer done');
//         },1000)
//     })
// }

// console.log('start')
// let x = createPromise();
// x.then(()=>{
//     console.log('promise fulfilled')
// }).catch((e)=>{
//     console.log('promise catched')
// })
// console.log('end')

function createPromise(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve('promise has been resolved');
            console.log('promise resloved successsfully after 4 second')
        },4000)
    })
}

let x = createPromise()
