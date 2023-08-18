let sayHello = myname=> "Amit singh";
console.log("Hello "+myname)

const x ={
    name: "Amit",
    role:"devloper",
    exp: 30,
    show: function(){
         let that=this
        //  console.log(this)

        setTimeout(() => {
            // console.log(`This name is ${that.name}\nThe role is ${that.role}`)
            console.log(`This name is ${this.name}\nThe role is ${this.role}`)
        }, 2000);
    }
}
x.show()





let num = 23;
let hari = ()=>{
    let a = "vijay";
    let b ="singh"
    // return a+b;
    console.log(a+b)
}
hari();
sayHello();






// let addNew = document.addEventListener("click",()=>{
//     console.log("clicked...")
// })

