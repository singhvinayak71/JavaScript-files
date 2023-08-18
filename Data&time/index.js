const date = new Date(2018,0,2,18,50,50,50);
// const date = new Date();
console.log(date);

// 1. get date and time

// console.log(date.getDay());
// console.log(date.getMilliseconds())
// console.log(date.getMinutes())
// console.log(date.getDate();
const hour = date.getHours()
const minute = date.getMinutes()
const seound = date.getSeconds();
const miliSecound =date.getMilliseconds();

const fullDate = `${hour}:${minute}:${seound}:${miliSecound}`;
// console.log(fullDate)

// console.log(`Current time is ${hour}:${minute}:${seound}:${miliSecound}`)



// 2. set date and time

const newDate = new Date();
// newDate.setDate();
// newDate.setMinutes();
// console.log(`this is newDate ${newDate}`);

// if(date<newDate){
//     console.log("future date")
// }
// else if(date>newDate){
//     console.log("past Date")
// }
// else{
//     console.log("date and time are same")
// }




const showTime = document.getElementById('time');


console.log(hour)
if(hour<=11){
    // console.log("good morning")
    let a= "Good morning";
    showTime.innerHTML=a;
    showTime.style.color="red"
    // return a;
}
    else if(hour<=12){
        let noon = "good afternoon";
        showTime.innerHTML=noon;
        showTime.style.color="blue";
    }
    else if(hour<=19){
        let evening = "Good evening";
        showTime.innerHTML=evening;
        showTime.style.color = "green"
    }
    else{
        let niggt = "good night";
        showTime.innerHTML = night;
        showTime.style.color="black";
    }
    // console.log(a)