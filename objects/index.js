const obj = [
    {
        id : 101,
        fisrtName : "Jay",
        lastName : "singh",
        bill : 84
    },
    {
        id : 102,
        fisrtName : "Jay",
        lastName : "singh",
        bill : 84
    },
    {
        id : 103,
        fisrtName : "Jay",
        lastName : "singh",
        bill : 84
    },
    {
        id : 104,
        fisrtName : "Jay",
        lastName : "singh",
        bill : 84
    },
]
console.log(obj[1])

// object destractruing


const course = {
    coursename: 'javascript',
    price: '999',
    courseInstructor: 'Hitesh chaudhari'
  }
  
  const {coursename, price,  courseInstructor: instructor} = course
  console.log(coursename, price, instructor)
  
