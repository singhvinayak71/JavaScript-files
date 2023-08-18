function h(x, fn){
    // console.log(x*x)
    fn(x*x);
}
h(10,exec)

function exec(n){
    console.log('squred value is : ', n)
}

console.log('start')

setTimeout(() => {
    console.log('timer done1')
}, 1000);
setTimeout(() => {
    console.log('timer done2')
}, 3000);
console.log('end');

for(let i = 0; i<100000000; i++){}
