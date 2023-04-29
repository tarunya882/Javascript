//Currying
//example f(a ,b) into f(a)(b)
//no of arguments should be equal to no of functions

const { func } = require("prop-types");


//We initialize our function once and call it multiple times
 function f(a) {
    return function (b){
        console.log(a, b);
    }
 }

 console.log(f(5)(4)); //outputs 5, 4 

 //Ques1 - sum(2)(6)(1)

 function sum(a){
    return function (b){
        return function (c) {
            return a+b+c;
        }
    }
 }

let sum = sum(1)(2)(3);
console.log("sum is", sum); //output: 6

//Ques2
//Infinite currying

//functn should support sum(3)(4) and sum(3)(5)(2)()().. so on

//eg: add(5)(2)(4)(5)();
 
function add(a) {
    return function (b) {
        if(b) return add(a+b);
        return a;
    }
}
 // abve code in one line
const sum = a => b => b ? sum(a+b) : a;
// to accept multiple arguments use => for eg sum(2,3,4)  equals sum = a=> b => c;

add(5)(2)(4)(5)();

//Ques3: Currying vs Partial Application

  //partial applctn
  function sum(a){
    return function(b,c){
        return a+b+c;
    };
  }

const x =sum(10);
console.log(x(5,6));

//or
console.log(sum(1),(2,3));

//Ques4: real tym eg for currying is used in manipulating dom
function updateElementtext(id) {
    return function(content){
        document.querySelector('#' + id).textContent = content;
    };
}

const updateHeader = updateElementtext("heading");

updateHeader("Tarunya");

//Ques5: curry() implementation: converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        if(args.length >= func.length){
            return func(...args);
        }
        else{
            return function (...next){
                curriedFunc(...args,...next);
            };
        }
    };
}

const sum = (a,b,c,d) => a+b+c+d;
const totalSum = curry(sum);
totalSum(1)(6)(5)(6);
//or 
curry(sum)(1)(6)(5)(6); //doubt 

// important links - https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more#comments-list //last problem
// https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04