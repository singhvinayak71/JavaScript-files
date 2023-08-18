const datas = [
    {name:"vinayak singh", age:20},
    {name:"shubham singh", age:23}
]
function getData(){
    setTimeout(() => {
        let output = '';
        datas.forEach((data,index)=>{
            output += `<li> ${index}. name is ${data.name} </li>`
        })
        document.body.innerHTML= output;
    },2000);
}
function createdata(newdata,callback){
    setTimeout(()=>{
        datas.push(newdata)
        callback()
    },3000);
}
// getData();
createdata({name:"vivek singh", age:20},getData)