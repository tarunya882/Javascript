//Objects in Js
//Ques1:
 const obj = {
    a: "one",
    b: "two",
    a: "three",
 }
 console.log(obj) // {a:"three", b: "two"}
 //if obj has 2 same keys then last key value is replaced and jey position remains same

 //Ques2
 const a = {};
 const b = {key: "b"};
 const c = {key: "c"};

 a[b] = 123;
 a[c] = 456;

 console.log(a[b]); //456
  
//  op is 456 because we cannot assign object to key or as key, so when we try to assign
//  object askey then it converts to string "object Object" .
//  So  when a[b] =123, then a['object Object'] =123 and when a[c]=456 then
//  a['object Object'] is replaced by 456 so op is 456


//Ques3: Json.stringify and json.parse

// when you convert object to string , it gives [object Object]
// json.stringify converts object to string
// json.parse converts string to object

// json.stringify usage: while storing object in local Storage, then we cannot directly 
// store obj , we need to convert to string and store.

// json.parse usage: when we retrieve object from local Storage, then to convert it to object
// we use json.parse 


//Ques4: 
console.log([..."Lydia"]); //['L','y','d','i','a']

//Ques5:
const settings = {
    name: "tarunya",
    level: 19,
    health: 90,
};

const data = JSON.stringify(settings,["level","health"]); //stringifies only provided properties i.e level and health
console.log(data); //{"level":19,"health":90}

//Ques6:
const shape = {
    radius: 10,
    diameter(){
        return this.radius * 2;
    },
    perimeter: () => 2*Math.PI *this.radius,
};
console.log(shape.diameter()); //20 //this refers to radius inside shape here
console.log(shape.perimeter()); //Nan because this in perimeter refers to window obj and it wont find radius there.

//this differs for normal function and arrow function

//Ques7: Destructuring-taking out specific properties from obj

// this code throws error identifier name has already been declared
const name='tarunya';
const {name} = settings;
console.log(name);

// to avoid the above error we can use 

const name='tarunya';
const {name: myName} = settings;
console.log(myName);

//Nested destrcuturing
let user = {
    name: "tarunya",
    age: 24,
    fullName: {
        first: "Tarunya",
        last: "Potla",
    },
};
const { fullName:{first} } = user;
console.log(fullName);//Tarunya

//Ques 8:
// rest parameters should always be at last
// learn diff btw rest and spread operator

//incorrect way-rest operators cannot be used in the middle
function getItems(list,...args,newItem){
    return [...list,...args, newItem];
}

//correct
function getItems(list, newItem,...args){
    return [...list,...args, newItem];
}

//Ques9:
let c ={greeting: "hey!"};
let d;

d=c; //here we are not copying one object to other, js gives ref of c to d
c.greeting = "Hello";
console.log(d.greeting); //"hey!"-wrong , because ref to d poimts out to c, whose value is hello

//Ques10:
//Objects are only equal if they point to same reference
console.log({a:1} == {a:1}); //false
console.log({a:1} === {a:1}); //false bcz they point out to diff memory space


//Ques11:
//Doubt
let person = {name:"tarunya"};
const members = [person];
person=null;
console.log(members); //[name:"tarunya"] //bcz we are changing complete person

let person = {name:"tarunya"};
const members = [person];
person.name=null;
console.log(members); //[name:null] // we are onl chging its properties

//Ques12:
const value = {number: 10};
const multiply = (x = {...value}) => {
    console.log(x.number *= 2);
};
 
// In this case ...value in multiply fucntion clones the value  object, it doesnot refer to
// value object and doesnot modify value object
multiply();  //20
multiply();  //20

//Here value is passed as argument, so it doesnt clone value and directly refers or points to
// value object. so after first multiply value obj number is changed to 20, now when 2nd time
// multiply is called value obj is refered to 20 so op is 40
multiply(value); //20
multiply(value); //40

//Ques12:
function changeAgeandRef(person){
    person.age = 25;
    person = {
        name:"taru",
        age:24,
    }
    return person;
}

const personObj1 = {
    name:"alex",
    age:30
};

const personObj2 = changeAgeandRef(personObj1);
console.log(personObj1); //alex, 25(we are changing person properties so personObj1 also changes as it is the ref)
  //it wont take return value bcz we are changing entire person obj , but not its properties.
console.log(personObj2); // taru,24


//Ques13: Whats shallow copy and deep copy?

// When one obj holds ref to another obj ,atleast some properties of original obj, it is called shallow copy
// When we completely clone one object to another variable, it is deep copy,
// here we dont have any references to original object.isRequired

let user = {
    name:"Tarunya",
    age:24,
}
//how to clone obj:
1. const objClone = Object.assign({}, user);
objClone.name="piyush";
console.log(objClone, user); // {name:piyush,age:24} y, {name:"Tarunya",age:24}

2. const objClone = JSON.parse(JSON.stringify(user));
objClone.name = 'Piyush';

2. const objClone = {...user};