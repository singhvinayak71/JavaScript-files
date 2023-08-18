console.log("hello world")
// const data = document.getElementsByClassName("showTime");
let data1 = document.getElementById('showTime');
data1.style.backgroundColor= "red";
data1.style.height= "50vh";
data1.style.display="flex"
data1.style.justifyContent="center";
data1.style.alignItems="center";
data1.style.fontSize="5rem";
data1.style.fontWeight="bold";
data1.style.color="white";



let date = new Date().toLocaleTimeString();
data1.innerHTML=date;


const currentTime = ()=>{
    date = new Date().toLocaleTimeString(); 
data1.innerHTML=date;

}

//In  setInterval we can assign a callback function and secound is time(time in milliSeconds) ,

setInterval(currentTime, 1000);