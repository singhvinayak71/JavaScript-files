// let a =document.getElementById('btn')
let a =document.querySelector('.btn')
function btn(){
    console.log('btn hasbeen clicked')
}

function mouseover(){
    a.style.background="red";
    console.log("mouse on the btn")
}
function mouseup(){
    console.log("mouse up the btn")
}
function mousemove(){
    a.style.background= "yellow"
}

addEventListener("click", ()=>{
    console.log("the button has been already clicked by me")
})


