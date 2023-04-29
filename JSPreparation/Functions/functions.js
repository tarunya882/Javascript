//IIFE?

const { AnyKind } = require("@sinclair/typebox");

// Immediately invokable function
(function square(num) {
  console.log(num * num);
})(5);

//op based qstn
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1); //op 1

/**
 * Ques3 - Function hoisting
 */
var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
};
fun(); //op undefined
// fun doesnt take x as 21 because whenever function is created it is created in
// 2phased , so in fst phase x is undefined. Function first search in lcoal scope for x
// if present then it takes its value or elseit takes from global scope
// here as x is undefined it takes undefined

//spread vs rest
// ... if used as parameters then rest otherwise spread

// eg
function mul(...nums) {
  //rest and usd only at last, rest should be last parameter
  console.log(nums[0], nums[1]);
}
var arr = [5, 6];
multiply(...arr); //spread

//

/**
 * Ques4 - It will throw reference error xyz is not defined when named
 * function expression is called
 */
const a = function xyz() {
    console.log("hello world");
};

xyz();