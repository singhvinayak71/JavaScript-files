// Attaching Multiple function

let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(56)
        },2000)
    })

    p.then(()=>{
        console.log("1st p is runing")
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("1st settimeout is running after 4 second")
                resolve(4)
            },4000)
        })
    }).then((value)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("1st settimeout is running after 5 second")
                resolve(5)
            },5000)
    })
})

p.then((value)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('2nd p is running after 3 secound')
        },3000)
    })
})