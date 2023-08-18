// Object Definition:-

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
// //   console.log(person.lastName);
// //   console.log(person["firstName"])
//   console.log(`${person.firstName} ${person["lastName"]} and age is ${person["age"]} and eye color is ${person["eyeColor"]}`)

// function show(){
//     return person.firstName + " " + person.lastName;
// }
// console.log(show())


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
//   console.log(person['fullName()'])
//   console.log(person['lastName'])
//   console.log(person['id'])
//   console.log(person[`firstName`])
//   console.log(typeof person['id'])
//   console.log(typeof person['fullName'])

//   Accessing Object Methods:-


// name = person.fullName;    //If you access a method without the () parentheses, it will return the function definition:
name = person.fullName();
console.log(name)
