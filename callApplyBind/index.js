let userDatails = {
    name: "Vinayak singh",
    age: 27,
    Designation: "Software Engineer",
   
}
let userDatails2 = {
    name: "Shubham singh",
    age: 28,
    Designation: "Software Engineer",
    
}


let printdetails = function(state, country){
    console.log(this.name + " " + state + " from " + country)
}

//----- function borrowing
printdetails.call(userDatails, 'Delhi', 'india')
// printdetails.call(userDatails2, 'delhi', 'india');

//-----Apply -- Apply is same as call function but with apply, we can pass an array list
// printdetails.apply(userDatails,['Delhi', 'india']);

// Bind - we can crate copy of our function and we can invoke later
// let newFunc = printdetails.bind(userDatails, 'Delhi', 'india')
// newFunc()
