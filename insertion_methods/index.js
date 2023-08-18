let a= document.getElementsByTagName('div')[0]
 

let div = document.createElement('div')
div.innerHTML = '<h1>Hello World!</h1>';


// a.append(div)
// a.prepend(div)
// a.before(div)
a.after(div)