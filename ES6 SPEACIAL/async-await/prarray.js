const addItems = document.getElementById("addItems");
const removeItems = document.getElementById("removeItems");

const arr = [
  { name: "vinayak singh", age: 26 },
  { name: "Ajay singh", age: 25 },
  { name: "Rahul", age: 25 },
];
arr.push({ name: "Abhshek pandey", age: 22 });
let deleteItem = ''
const myfun = async () =>
  arr.forEach((value, index) => {
    setTimeout(() => {
      let showname = value.name;
      console.log(showname);
      addItems.innerHTML += `My name is  <li>${showname}  and age is ${value.age}</li><br/>`;
      addItems.innerHTML += `<button  onclick="deleteItem()" id= ${index} >delete</button>`;
     deleteItem = () => {
        console.log(`id ${value.age} is deleted`);
      };
    }, 2000);

  });
myfun();


const newfun = () => {
  
};
