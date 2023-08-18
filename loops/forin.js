let arr = [
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

  //1:-traditional for loop

  // for (let index = 0; index < arr.length; index++) {
  //   const element = arr[index];
  //   console.log(element)
  // }


//2:-for...in loop

  // for (const key in arr) {
  //   console.log(key)
  // }



  // 3:-for...of loop

  // for (const key of arr) {
  //   console.log(key)
  // }


  //4:- forEach loop

  // arr.forEach(element => {
  //   console.log(element)
  // });





  // for(i=0; i<arr.length;i++){
  //   const data =arr[i];
  //   console.log(data)
  //   console.log(i)
  // }



  // rough work
  // for(const key in arr){
  //   console.log(key)
  // }

  // for(const key of arr){
  //   console.log(key)
  // }

  arr.forEach((value,key)=>{
    console.log(key)
      // console.log("hello this loop",value)
  })