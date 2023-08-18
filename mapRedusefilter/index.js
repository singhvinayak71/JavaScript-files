let arr = [5, 1, 3, 2, 4, 6];

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(findMax(arr))

function findMin(arr) {
    let min = 5;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;

}
console.log(findMin(arr));

const minvalue = arr.reduce((max, curr)=>{
    if(curr > max){
        max = curr
    }
    return max
},0);
console.log(minvalue)