class Complex{
    constructor(real,imaginary){
        this.real= real;
        this.imaginary=imaginary;
    }
    add(num){
        this.real= this.real+num.real;
        this.imaginary=this.imaginary+num.imaginary
        return new Complex()
    }

    get real(){
        return this._real;
    }
    set real(newReal){
        this._real= newReal
    }
    get imaginary(){
        return this._imaginary
    }
    set imaginary(newImaginary){
        this._imaginary=newImaginary
    }
}

let a = new Complex(2,4)
console.log(a.real, a.imaginary)

a.real= 10          // set the value of real
a.imaginary=6        // set the value of imaginary
let b = new Complex(4,6)

a.add(b)
// console.log(a.real, a.imaginary)
console.log(`${a.real}+${a.imaginary}!`)





// class Human{
//     constructor(name,favFood){
//         this.name=name;
//         this.favFood=favFood;
//     }
//     walk(){
//         console.log("Human is walking")
//     }
// }

// class Student extends Human{
//     walk(){
//         console.log(this.name+" is a student and he is walking")
//     }
// }
// let a =new Student("amit")
// a.walk()

// console.log(a instanceof Student)