class Animal{
    constructor(name){
        this.name=Animal.capitalize(name)
    }
    walk(){
        console.log("Animal "+this.name+" is walking")
    }
    static capitalize(name){
        return name.charAt().toUpperCase()+ name.substr(1,name.length);
    }
}

j= new Animal("jaik")
j.walk()