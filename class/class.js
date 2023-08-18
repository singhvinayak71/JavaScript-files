// class person {
//     constructor(n,c, a) {
//         this.name = n;
//         this.age = a;
//         this.class=c;
//     }
//     sayHi() {
//         console.log("Hii...");
//     }
//     static sproperty = "somthing";

//     static hello() {
//         console.log("Hello..");
//     }
// }
// let person1 = new person("vinayak", 26,12);
// let person2 = new person("Shubham", 27,14);

// let person3= new person(person1.name+" singh",56,54)
// person.hello();
// person1.sayHi();
// console.log(person.sproperty);
// console.log(person1,person2,person3);


// class emp{
//     constructor(n){
//         this.name=n;
//         }
// }

// class manager extends emp{
    
// }

// let mng1= new manager("Vinayak");
// console.log(mng1)


class RailwayForm {
    submit() {             //submit() is an object
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    fill(givenname, trainno) {
      this.name = givenname
      this.trainno = trainno
    }
  }
  
  // Create a form for Harry
  let harryForm = new RailwayForm()
  // Fill the form with Harry's details
  harryForm.fill("Harry", 145316)
  
  // Create a forms for Rohan
  let rohanForm1 = new RailwayForm()
  let rohanForm2 = new RailwayForm()
  // Fill the forms with Rohan's details
  rohanForm1.fill("Rohan", 222420)
  rohanForm2.fill("Rohan", 2229211)
  
  harryForm.submit()
  rohanForm1.submit()
  rohanForm2.submit()
  rohanForm1.cancel()
