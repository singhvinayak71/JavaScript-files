// argument object:- The variables of javascript represent the argument that are passed to a function
function add(){
    if(arguments.length==0)
    {
        console.log("No Agrument passed")
    } 
    else{
        let sum= 0;
        for(let i=0; i<arguments.length;i++)
        {
            sum= sum+arguments[i];
        }
        console.log(sum)
    }
}
add(1,2,3);
add(4,5,6,7)       // now we can pass any numbers of arguments with the argument object