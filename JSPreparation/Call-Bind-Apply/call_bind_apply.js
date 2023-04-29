const { exitCode } = require("process")

//call , bind and apply 
sets this keyword independent of how the function is called

Explicit binding 

//ques1- What is call?
var obj = { name: "Tarunya"};

function sayHello(age) {
    return "hello" + this.name + "is" + age;
}
console.log(sayHello.call(obj, 24)); //op hello Tarunya is 24

// call gives access to obj for function sayHello, and this points to that obj
//first parameter in call is obj and if u want to pass any arguments we pass after obj

//ques2 - what is apply?
//works same as call but only diff is it takes arguments ar an array

var obj = { name: "Tarunya"};

function sayHello(age) {
    return "hello" + this.name + "is" + age;
}
console.log(sayHello.call(obj, [24, "Software Engineer"]));

//ques3: what is bind?
// bind provides us with another function that can be reused later 

var obj = { name: "Tarunya"};

function sayHello(age) {
    return "hello" + this.name + "is" + age;
}

const bindFunc = sayHello.bind(obj);

console.log(bindFunc(24));
console.log(bindFunc(69));

//ques4: 
const person = {name: "Tarunya"};
function sayHi(age) {
    return `${this.name } is ${age}`;
}
console.log(sayHi.call(person,24)); //op Tarunya is 24
console.log(sayHi.bind(person, 24)); //returns function


//ques5: Call with function inside object
const age = 10;
var person = {
    name : "Tarunya",
    age: 20,
    getAge: function () {
        return this.age;
    },
};

var person2 = {age: 24 };
person.getAge() //this refers to person and prints 20
person.getAge.call(person2); // this refers to person2 and prints 24
person.getAge.apply(person2); 
person.getAge.bind(person2)(); 


//ques6: What is the op?
var status = "one";

setTimeout(() => {
    const status = "two";

    const data = {
        status: "three",
        getStatus() {
            return this.status;
        },
    };
    console.log(data.getStatus()); //three
    console.log(data.getStatus.call(this)); //one bcz this points to global obj

},0);

//ques7: call printanimals such that it prints all animals in obj

const animals = [
    {species: "Lion", name: "King"},
    {species: "whale", name: "Queen"},
];

function printAnimals(i) {
    this.print = function () {
        console.log(i+this.species+this.name);
    };
    this.print();
}
//sol
for(let i = 0;i<animals.length;i++){
    printAnimals.call(animals[i], i);
}

//ques8: Append array to another array 
const array = ["a","b"];
const elements = [0,1,2];
array.push.apply(array, elements); //push takes array and breaks down and appends each element to array

//ques9: Find min/max in an array
//go through first argument and 2nd argument in apply funtn
const numbers = [5,6,2,3,7];
console.log(Math.max.apply(null,numbers));

//ques10: Bound function

function f() {
    console.log(this); //points to window obj as f.bind will return another function with context of null
}

let user = {
    g: f.bind(null),
};
user.g();

//ques11: Bind chaining

function f() {
    console.log(this.name); //op John
}

f = f.bind({name:"John"}).bind({name: "Ann"});
f();

// op is John because once an object is binded to a func it can be changed 
// and bind chaining doesnt exist

//ques12: Fix last line to make code work properly
function checkPassword(success, failed) {
    let password = promt("");
    if(password == "RC") success();
    else failed();
}

let user = {
    name: "Tarunya",
    login(){
        console.log(this.name);
    },
    logout(){
        console.log(this.name);
    },
}
checkPassword(user.login(),user.logout()); //login logout executed in checkpassword,
// it doesnt have access to name as it is not present in checkpassword ,so it doesnt print anything

//fix 
checkPassword(user.login.bind(user), user.logout.bind(user));

//ques13: followup questn
function checkPassword(success, failed) {
    let password = promt("");
    if(password == "RC") success();
    else failed();
}

let user = {
    name: "Tarunya",
    login(result){
        console.log(this.name + (result? "success":"fail"));
    },
}
checkPassword(user.login.bind(user, true), user.login(user,false)); 

//quess14: Explicit binding with arrow function

const age =20;
var person = {
    name:"tsrunya",
    ae:20,
    getAgeArrow:() => console.log(this);
    getAge: function(){
        console.log(this);
    }
};
var person2 = {age: 24}; 

person.getAgeArrow.call(person2); //undefined - because getagearrow function this points to window object bcz
// arrow function takes context from parent nrml function but it doesnt have any parent nrml function
// we cant change context of arrow function even with help of call bind and apply, 
// it works as before irrespective of any function like call, bind etc
person.getAge.call(person2); //24

//ques16: 
// a interviewer asked me to do a small function like this

const a = [1,2,3] // Output [1,2,3,1,2,3]

// I used spread method like this [...a,...a]

// Then he asked to do it in some other way, I could have used call and apply
// soltn:
a.push.call(a,...a);
a.push.apply(a,a);

//ques15: Polyfill for call, bind and apply
How does call work? 




