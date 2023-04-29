**Function Statement / Function Declaration:**
function a(){

}
Function stmt should always have a name.
**Function Expression:**
Store function inside a variable.
var b = function a(){

}
Difference between Func stmnt and func expression is hoisting. func stmts are hoisted completely but func expression acts like a variable, they are not hosted completely so the value is undefined.

**Anonymous Function**
Function which has no name.
function (){
    
}
Above function results in syntax error. 
Then what is the point of having anonymous function?
Anonymous functions are used in a place where functions are used as values.
In short, function stmt cannot use anonymous function.
Correct usage:
const a = function() {

}

**Named Function expression**
const a = function xyz() {

}
xyz() -> throws error not defined because xyz func is not created in outer scope as it is created as value

**Parameters vs Arguments**
Values that we pass inside the function are called arguments
eg b(1,3);
Label/Identifier that gets these values are called identifiers
eg func b(param1, param2) {

}

**First class functions**
Ability to use functions as value and can be passed to another function and can be returned from another function 

**IIFE**

**Function Scope**

**Notes**
Functions are hoisted completely

**Callback functions**
Function that is passed on as argument to another function is called callback function.

Blocking main thread
Blocking callstack is known as blocking main thread


**Remove event listeners:**
If there are so many event listeners then there will be lot of closures taking up memory space , consuming lot of memory and all these callback functions hold their scope. Due to this page will slow down

**Notes:**
1. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
2. Event listeners can also invoke closures with scope.
3. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

References:
https://www.youtube.com/watch?v=btj35dh3_U8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=17
https://www.youtube.com/watch?v=HkWxvB1RJq0&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=21 - last problem imp (related to prototype and polyphills)
https://www.youtube.com/watch?v=wstwjQ1yqWQ

**Higher Order Function**
A function that takes function as an argument or returns another function is called HOF.


