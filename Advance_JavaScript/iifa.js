// let a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(56);
//     }, 3000);
//   });
// };

// a();

// ( async () => {
//   let b = await a();
//   console.log(b);
//   let c = await a();
//   console.log(c);
//   let d = await a();
//   console.log(d);
// })();

///////////////


const a = async(text,n=2)=>{
  return new Promise((resolve, reject)=>{
        setTimeout(() => {
          resolve(text)
        }, 1000*n);
  })
}

 
(
    async()=>{
      let text= await a("Hello")
      console.log(text)
      let c= await a("World")
      console.log(c)
    }
)();

(
async()=>{
  let text= await a("I am resolving after 1 second",1)
  console.log(text)
  let c= await a("I am resolving after 1 second",4)
  console.log(c)
}
)();


