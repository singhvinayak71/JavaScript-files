// 1. Q:- Write a JavaScript function to check whether an 'input' is a string or not.

// console.log(_isString("vinayak singh"))
is_string = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]')
      return true;
    else
      return false;   
      };
  console.log(is_string('w3resource'));
  console.log(is_string([1, 2, 4, 0]));

