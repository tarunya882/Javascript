/**
 * 
 * CLOSURES
 */


// Example1:
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// o/p -> Count is 0

// Bonus:  fix log() function to return the message having the actual count value?
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  function log() {
    let message = `Count is ${count}`;
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// o/p -> Count is 3

// Example2:

function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!

/**
 *   Anyone can modify items array directly because stack.items property is exposed.

  That's an issue since it breaks the encapsulation of the stack: only push() and pop() methods
   should be public, but stack.items or any other details shouldn't be accessible.
 */
function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => undefined

/**
 * Example3:
 * If multiply(num1, numb2) is invoked with 2 arguments, it should return the multiplication
 * of the 2 arguments.But if invoked with 1 argument const anotherFunc = multiply(num1),
 * the function should return another function. The returned function when called anotherFunc(num2)
 * performs the multiplication num1 * num2.
 */
function multiply(num1, num2) {
  if (num2 !== undefined) console.log(num1 * num2);
  return function mul(n2) {
    console.log(num1 * n2);
  };
}

multiply(4, 5); // => 20
multiply(3, 3); // => 9
const double = multiply(2);
double(5); // => 10
double(11); // => 22

/**
 * Example4:
 */
var x = 10;

function foo() {
  var y = x + 5;
  return y;
}

function bar() {
  var x = 2;
  return foo();
}

function main() {
  foo(); // Static scope: 15; Dynamic scope: 15
  bar(); // Static scope: 15; Dynamic scope: 7
  return 0;
}

/**
 * Example5:
 */
var myVar = 100;

function foo() {
  console.log(myVar);
}

foo(); // Static scope: 100; Dynamic scope: 100

(function () {
  var myVar = 50;
  foo(); // Static scope: 100; Dynamic scope: 50
})();

// Higher-order function
(function (arg) {
  var myVar = 1500;
  arg(); // Static scope: 100; Dynamic scope: 1500
})(foo);

/**
 * Example 6:
 */

function findNormal(index) {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

console.time("6");
findNormal(6);
console.timeEnd("6");
console.time("20");
findNormal(20);
console.timeEnd("20");

// optimal closure

function findIndex() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const find = findIndex();

console.time("6");
find(6);
console.timeEnd("6");
console.time("20");
find(20);
console.timeEnd("20");

/**
 * eg links -> https://javascript.plainenglish.io/ultimate-interview-questions-on-javascript-closures-8dd12a210677
 */
