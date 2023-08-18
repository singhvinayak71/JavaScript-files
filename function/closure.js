// closure:- closure is an inner function that has access to the outer(enclosing) function's variables

// function show(){
//     let j= " J is a local variable"
//     console.log(j)
//     function innerFun(){
//         let k= " K is a local variable"
//         console.log(k)
//     }
//     innerFun();
//     // console.log(k)  // this is thorw an error because colsure have an local scope 
// } 
// show();

// let str= "javascript"
// console.log(str.charAt(0))

// function init(){
//     let name= "mohit";
//     function displayName(){
//         console.log(name)
//     }
//     name="vinayak"
//     return displayName;
// }
// let a= init();
// a()

// function returnFunc(){
//     const x = () => {
//         let a = 1;
//         console.log(a)
//         const y = () =>{
//            let a = 2;
//             console.log(a);
//             const z = ()=>{
//                let a = 3;
//                 console.log(a)
//             }
//             z()
//         } 
//         y()
//     }
//     return x
// }
// let a = returnFunc()
// a()

function main () {
    let a = ()=>{
        let x = 5;
        console.log(x)
        let b =()=>{
            let x = 6;
            console.log(x)
            const c =()=>{
                let x =9;
                console.log(x)
                    let d= ()=>{
                        let x =10;
                        console.log(x)
                    }
                    d()
            }
            c()
        }
        x= 999
        b()
    }
    return a
}
let g =main()
g()