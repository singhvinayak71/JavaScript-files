// class Car{
//     constructor(name,year){
//         this.name= name;
//         this.year=year;
//         console.log("this is running")
        
//     }
//     age(){
//         // this.year=year;

//         let date = new Date();
//         return date.getFullYear()-this.year;
//     }
//     serviseing(serviseDate,time){
//         this.servisingDate = serviseDate;
//         let serviseNewDate = new Date();
//         return serviseNewDate
//     }
// } 
// let myCar = new Car("Ford",2014);
// console.log(myCar.name)
// console.log(myCar.year)
// document.getElementById('demo').innerHTML= "My " +myCar.name +" Car is "+myCar.age()+" year old" +" And last servicing date "+ myCar.serviseing()+myCar.name;

class RailwayForm {

    constructor(givenname, trainno,address){
        console.log("constactrutor called...."+givenname +" "+trainno)
        this.name = givenname
        this.trainno = trainno
        this.address= address

    }

    preview() {            
      alert(this.name + ": Your form preview for train number: " + this.trainno+" And your Address is "+this.address)
    }
    submit() {            
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
      this.trainno=0;
    }
  }
  
 let myForm = new RailwayForm("vinayak ", 14533, "santa (mp)")
 myForm.preview()
 myForm.submit()
 myForm.cancel()
 myForm.preview()
