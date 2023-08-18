let first = document.getElementById('first')
 
console.log(first.getAttribute('class'))   // this method is used to get class atttibute
console.log(first.hasAttribute('class'))     //if class attribute is available in id- first, its return true

// first.setAttribute("class", "img logo")        //set img and logo classes
first.removeAttribute('class')     //remove class attribute

// console.log(first.attributes);
console.log(first.dataset)
