// async function foo() {
//     return {name: "vinayak", lastname: "singh"}
//   }
// async function foo() {
//     const result1 = await new Promise((resolve) =>
//     setTimeout(() => resolve("1")),
//     );
//     const result2 = await new Promise((resolve) =>
//       setTimeout(() => resolve("2")),
//     );
// }
// foo();



// async function foo() {
//     const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
//     const p2 = new Promise(( r, reject) => setTimeout(() => reject("2"), 500));
//     const results = (await p1,await p2); // Do not do this! Use Promise.all or Promise.allSettled instead.
//   }
//   foo().catch(() => {})

// console.log(foo());


        // async function fruit(){
        //     const apple = new Promise((resolve,reject) =>{
        //         setTimeout((
        //             resolve("1")
        //         ),1000)
        //     });
        //     const orange = new promises((resolve,reject) =>{
        //         setTimeout(() => {
        //             reject("reject")
        //         }, 2000);
        //     })
            // const results =  [await p, await p2];
            // const err = await orange
        // }
    

        function myFunc(theObject) {
            theObject.make = "Toyota";
            theObject.model = "Accord+"
          }
          
          const mycar = {
            make: "Honda",
            model: "Accord",
            year: 1998,
          };
          
          myFunc(mycar);
        //   console.log(mycar.make);
        //   console.log(mycar.model);


        // function myFunc(theArr) {
        //     theArr[0] = 30;
        //   }
          
        //   const arr = [45];
          
        //   console.log(arr[0]); // 45
        //   myFunc(arr);
        //   console.log(arr[0]); // 30
          