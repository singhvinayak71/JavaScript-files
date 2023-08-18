let h1 = document.createElement('h1');
let btn = document.getElementById('btn');
let main = document.getElementById('main')


h1.innerHTML = "My Name Is Vinayak singh";
document.getElementById('root').appendChild(h1);

function sayHello(){
    console.log("hello")
    let h2 = document.createElement('h2');
    document.getElementById('root').appendChild(h2)
    h2.innerHTML = "this is my first name";
    h1.style.display= "none"
    h2.style.fontSize = "3rem"
    main.style.color="yellow";
    main.style.padding="10px";
    main.style.margin= "10px";
    main.style.background="green";
    main.style.transition= "transform"
}

