// const showData = document.getElementById('showData');

const array =[
    {
      imgSrc: "./img/img1.jpg",
      name: "Avatar2",
      link: "https://youtu.be/PuOMPRZZwlg",
    },
    {
      imgSrc: "./img/img2.jpg",
      name: "Mysterious Island (Full Movie) ",
      link: "https://youtu.be/YsasEgkfJJ8",
    },
    {
      imgSrc: "./img/img3.jpg",
      name: "Quantum Voyage (The Black Hole) ",
      link: "https://youtu.be/HSaQoVOFS1U",
    },
    {
      imgSrc: "./img/img4.jpg",
      name: "Netaji Subhas Chandra Bose : The Forgotten Hero ",
      link: "https://youtu.be/WczVepo7fKw",
    },
  ]
  // const mydata = data.map((value,index,arr)=>{
  //   console.log(value)
  // })
  // let sendDAta = value;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
  }