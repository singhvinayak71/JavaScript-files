const arr = [1, 2, 3, 4, 5];

function numberChecker(arr){
    let obj = new Object(arr);
    console.log(obj);
    
    return function(num){
        return obj.hasOwnProperty(num)
    }
}

const checkNum = numberChecker(arr);
console.log(checkNum(2));