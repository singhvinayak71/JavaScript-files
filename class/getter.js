// Getter & Setter

class Animal{
    constructor(name){
        this._name= name;
    }
    fly(){
        console.log("Birds are flying")
    }
    get name(){
        return this._name;
    }
    set name(newName){
        return this._name=newName;
    }

}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating Carrot")
    }
}
 
a = new Rabbit("Bruno ")
a.fly()
console.log(a.name)
a.name="Jaik";
console.log(a.name)

// instanceof opreter

let c = 56;

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)

