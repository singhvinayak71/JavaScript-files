// let promise = new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed
  
//     // after 1 second signal that the job is done with the result "done"
//     setTimeout(() => resolve("done"), 1000);
//   });

// let promise = new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });

// let promise = new Promise(function(resolve, reject) {
//     resolve("done");
  
//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
//   });
//   console.log(promise)


// let promise = new Promise(function(resolve, reject) {
//     // not taking our time to do the job
//     // resolve(123); // immediately give the result: 123
//     reject("error"); // or immediately give the result: error
// });

  
  // resolve runs the first function in .then
//   promise.then( result => console.log(result),error => console.log(error) );
//  promise.then()

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
//   // .catch(f) is the same as promise.then(null, f)
//   promise.catch(console.log("this is error", )); 

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value"), 2000);
//   })
//     .finally(() => console.log("Promise ready")) // triggers first
//     .then(result => console.log(result));

new Promise((resolve, reject) => {
    throw new Error("error");
    // setTimeout(() => resolve("value"), 2000);
  })
        .finally(() => console.log("Promise ready")) // triggers first
        .then(result => console.log(result));
  

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
  
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
//     document.head.append(script);
// }
// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//   script => alert(`${script.src} is loaded!`),
//   error => alert(`Error: ${error.message}`)
// );

// promise.then(script => alert('Another handler...'));