const mySet = new Set([1, 2, 3, 4, 5, 2, 3, 2, 4, "hello", "hello"]);
// console.log(mySet);

//1.  Instance methods-----------

//----- add() method
const set1 = new Set();
set1.add(1);            // insert new value
set1.add(2);

//----- has() method
// console.log(set1.has(2))       // returns boolean value

//----- delete method   // delete value
set1.delete(2)

//----- clear method
set1.clear();        // remove all element from the set object
// console.log(set1);

//------ size() method
// console.log(set1.size)




//2. iterable methods==============


//------ entries() method
const set2 = new Set()
set2.add(1)
set2.add("one")

const set3 = set2.entries();
for(const entrySet of set3){
    // console.log(entrySet)
}

// ------ forEach() method

function logSetElements(value1, value2, set) {
    console.log(`[${value2}] = ${value2}`);
  }
  
  new Set(['foo', 'bar', undefined]).forEach(logSetElements);