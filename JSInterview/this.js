// Object binding 2 types, implicit and explicit
// Implicit: When you invoke a functn present inside object using . notation
// This keyword points out to such object using which we invoked function.

// this in normal functions points to immediate parent function/object
let user = {
    name:"tarunya",
    age: 24,
    childObj: {
        newnName: "roadside coader",
        getDetails() {
            console.log(this.newnName,"and", this.name); //roadside coader and undefined
        },
    },
};
user.childObj.getDetails();


this in arrow function comes from its parent function
let user = {
    name:"tarunya",
    age: 24,
    getDetails: () => {
        console.log(this.name); //undefined
    },
};
user.getDetails();

let user = {
    name:"tarunya",
    age: 24,
    getDetails() {
        const nestedArrow = () => console.log(this.name); //tarunya
        nestedArrow();
    },
};
user.getDetails();

//This in constructor/class
// Inside of the class this points to all the fields present inside the constructor
const user { 
    constructor(n) {
        this.name = n;
    }

    getName () {
        console.log(this.name); //tarunya
    }
}
const User = new user("tarunya");
User.getName();


//ques1:
const user = {
    firstName: "tarunya",
    getName() {
        const firstName = "tarunya potla";
        return this.firstName;
    },
};
console.log(user.getName()); //op tarunya

//ques2: What is the result of accessing its ref?why?
function makeUser() {
    return {
        name:"tarunya",
        ref: this, //points to window object
    };
}

let user = makeUser();
console.log(user.ref.name); 
 
//op - Empty
// To fix this issue to get name john 
function makeUser() {
    return {
        name:"tarunya",
        ref () {
            return this; //no longer points to window
        }
    };
}

let user = makeUser();
console.log(user.ref().name) //op tarunya


ques3:
const user = {
    name: "Tarunya",
    logMessage() {
        console.log(this.name); 
    },
};

console.log(user.logMessage()); //op Tarunya
setTimeout(user.logMessage, 1000); //op undefined
//op -undefined
// settimeout takes callback function logMessage and after 1sec,
// it executes . Now it wont have access to user object right Headers, so it points to
// window object. There we wont have name so it prints undefined


//Fix
const user = {
    name: "Tarunya",
    logMessage() {
        console.log(this.name); 
    },
};
setTimeout(function (){
    user.logMessage();
}, 1000); //op Tarunya , because, logMessage now executes as a method in object
// and not as call back function, so this point out to object user


//ques4:
const user = {
    name: "tarunya",
    greet() {
        return this.name;
    },
    farewell: () => {
        return this.name;
    },
};
console.log(user.greet()); //op - tarunya
console.log(user.farewell()); //op - undefined

//ques5:
let calculator = {
    read(){
        this.num1 = +prompt("Enter num1", 0);
        this.num2 = +prompt("Enter num2",0);
    },
    sum(){
        return this.num1+this.num2;
    },
    mul() {
        return this.num1*this.num2;
    }
    
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


//ques6:
var length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method (fn) {
        fn(); //points to window bcz function is called inside method, so op is 4
        //inside method this points to "object" 
    },
};
object.method(callback);

const object = {
    length: 5,
    method () { //arguments = [callback,2,3] check prototype of an array
        console.log(arguments) //prints array arguments and in that we have length of the array length:3
        arguments[0](); //arguments take the params whatever we pass to function as an array
        // when we pass callback in above line , its parent object is arguments i.e entire arguments array, so there length is 3
    },
};
object.method(callback,2,3);



//ques7:IMplement this code
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(b){
        this.total *= a;
        return this;
    },
    subtract(b){
        this.total -= a;
        return this;
    }
}