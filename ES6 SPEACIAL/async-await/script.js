
const showName = document.getElementById("fullName")
const showmobile = document.getElementById("mobile")
const data = [{ name: "vinayak" }, { name: "ajeet" },{name:"aman"}];
const lastname ="singh"
const surname = "somvanshi";

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((value,index)=>{
      output += `<li>  ${index+1}. ${value.name} ${lastname} ${surname}</li>`
    })
    showName.innerHTML= output
  }, 4000);
}


let Mobile = [{mobile:8893182358}, {mobile:7748967540},{mobile:8899665588}]
function addMobile(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let addMobile = '';
      Mobile.forEach((value)=>{
         addMobile +=  `<li>This is my mobile ${value.mobile} </li>` 
      })
      resolve();
      showmobile.innerHTML= addMobile
    }, 2000);
  })
}


addMobile()

getData().then(addMobile);
