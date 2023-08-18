const data = [ 
    {name:"vinayak singh",mobile:8839182358, email:"singhvinayak71@gmail.com",profession:"Full Stack Devloper"},
    {name:"Shubham singh", mobile:7748967540, email:"shubhamsingh77@gmail.com", profession:"java devloper"},
    {name:"Vivek singh", mobile:9131726815, email:"singhvivek73@gmail.com", profession:"teacher"  }
]

function getdata(){
    setTimeout(()=>{
        let output = "";
        data.forEach((data,index)=>{
            output += `<li>Name:- ${data.name} <br> Mobile:- ${data.mobile} <br> Email:- ${data.email} <hr> </li> `
        })
        document.body.innerHTML = output;
    },1000)
}
function createData(newdata){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      data.push(newdata)
      let error= false;
      if(!error){
        resolve();
      }
      else{
        reject("this is an error")
      }
    }, 3000);
  })
}

async function start(){
    await createData({name:"Rohit sharma", mobile:857495263, email: "rohitsharma88@gmail.com"})
    getdata();
}