// const array1 = [1, 4, 9, 16];

// Pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]


// 

// const numbers = [1, 4, 9, 15 , 16];
// const roots = numbers.map((num) => Math.sqrt(num));
// console.log(roots)



// 
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
//   console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
//   console.log(kvArray);

// 

// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * 2);

// console.log(doubles); // [2, 8, 18]
// console.log(numbers); // [1, 4, 9]

// 

const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
//   console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
  // [ 4, 9, 16 ]

//   
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 4) {
    return num;
  }
});
console.log(filteredNumbers)