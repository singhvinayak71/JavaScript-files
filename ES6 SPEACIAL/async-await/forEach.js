// let sum = 5;
// const numbers = [65, 44, 12];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
//   console.log(sum)
// }
// myFunction();




// const numbers = [65, 44, 12,18];
// numbers.forEach(myFunction)

// function myFunction(item, index, numbers) {
//   console.log(item)
//   // numbers[index] = item * 10;
//   // console.log(numbers)
// } 
// myFunction();

// numbers.forEach((item,index)=>{
//   // console.log(`${item} is ${index+1}th number`)
//   if(index<1){
//     console.log(`${item} is ${index+1}st number`)
//   }
//   else if(index<2){
//     console.log(`${item} is ${index+1}nd number`)
//   }
//   else{
//     console.log(`${item} is ${index+1}th number`)
//   }
// })



// const ratings = [5, 4, 5];
// let sum = '';

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
//   console.log(sum);
// });




// const arraySparse = [1, 3, /* empty */, 7,8];
// let numCallbackRuns = 0;

// arraySparse.forEach((element) => {
//   console.log({ element });
//   numCallbackRuns++;
// });

// console.log({ numCallbackRuns });





// const student = ["hari" ,'pari','mohit', "ajay"];
// let total = 0;
// student.push("Vinayak")
// student.shift()
// student.unshift("ajay")
// student.forEach((element)=>{
//   total++;
//   console.log(element)
// })
// console.log(`Total number of student is ${total}`)


// Converting a for loop to forEach:-

// const items1 = ["item1", "item2", "item3","item4","item5", "item6", "item7","item8"];
// const items2 = ["item9", "item10", "item11","item12","item13", "item14", "item15","item16"];
// const copyItems = ["hello"];
// console.log(copyItems)

    // items1.push(items2);
    // console.log(myarr)

// let arr = items1.concat(items2)
// console.log(arr.length)

// console.log(items.length)
// console.log(arr[arr.length-5])

// before
// for (let i = 0; i < arr.length; i++) {
//   copyItems.push(arr[i]);
// }

// after
// arr.forEach((item) => {
//   return copyItems.push(item);
// });
// console.log(copyItems)

// console.log(`This is copy items ${copyItems}`)



// const logArrayElements = (element, index /*, array */) => {
//   console.log(`a[${index}] = ${element}`);
// };

// // Notice that index 2 is skipped, since there is no item at
// // that position in the array.
// [2, 5, , 9].forEach(logArrayElements);



// class Counter {
//   constructor() {
//     this.sum = 2;
//     this.count = 25;
//   }
//   add(array) {
//     // Only function expressions will have its own this binding
//     array.forEach(function countEntry(entry) {
//       this.sum += entry;
//       ++this.count;
//     }, this);
//   }
// }

// const obj = new Counter();
// obj.add([2, 5, 9]);
// console.log(obj.count);
// console.log(obj.sum);



// const copy = (obj) => {
//   const copy = Object.create(Object.getPrototypeOf(obj));
//   const propNames = Object.getOwnPropertyNames(obj);
//   propNames.forEach((name) => {
//     const desc = Object.getOwnPropertyDescriptor(obj, name);
//     Object.defineProperty(copy, name, desc);
//   });
//   return copy;
// };

// const obj1 = { a: 1, b: 2 };
// const obj2 = copy(obj1);

// console.log(obj2)

