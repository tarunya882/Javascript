//Promises in JS
// Synchronous vs Asynchronous code
 
// -> Promises are asynchronous 

//Sync
 console.log("start");

 console.log("subscribe");

 console.log("end");

 //op s
 start
 subscribe 
 end

 //Async code
 console.log("start");
 setTimeout(() => {
    console.log("subscribe");
 },1000);

 console.log("end");

 //op 
 start 
 finish 
 subscribe

 //Js executes synchronous code first and then asynchronous

 //eg1:
 console.log("start");

 function importantAction(username) {
    setTimeout(() => {
        return username;
    },0);
 }

 const msg = importantAction("tarunya");
 console.log(msg); //undefined bcz settimeout executes after all lines are executed so msg will be undefined
 console.log("end");

 //Fix
 console.log("start");

 function importantAction(username, cb) {
    setTimeout(() => {
        cb(username);
    },0);
 }

 const msg = importantAction("tarunya", function (msg) {
    console.log(msg); //prints tarunya 
 });
 console.log("end");


 //eg2:

//  callbback hell- so many callbacks nested

//  to solve this we use promises

console.log("start");
const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = true;
        if(result) resolve("subscribed");
        else reject(new Error('Pls subscribe'));
    }, 2000);
});

sub.then((res)=>{
    console.log(res);
}).catch((err) => {
    console.log(err);
});

console.log("stop");

//eg3:
console.log("start");

const sub = Promise.resolve("subscribed");
console.log(sub);
sub.then((res) => console.log(res)).catch((err) => console.log(err));
console.log("end");

//op 
//start
//promise state by default fulfilled (bcz async code executes only after sync code execution is done even though promise is fulfilled)
//end
//subscribed 

//promise chaining => eg
//promise combinator
// When promise is created ,synchronous code if present is executed

//eg
console.log("start");

const promise1 = new Promise((resolve,reject) => {
    console.log(1);
    resolve(2);
});

promise1.then((res) => {
    console.log(res);
});

console.log("end");

//op
start
1
end
2
//bcz console.log(1) is synchronous code when promise is initialized , so it executes

//eq:
console.log("start");

const promise1 = new Promise((resolve,reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
});

promise1.then((res) => {
    console.log(res);
});

console.log("end");

//op
start
1
3
end
2

//eq:
console.log("start");

const promise1 = new Promise((resolve,reject) => {
    console.log(1);
    console.log(3);
});

promise1.then((res) => {
    console.log(res);
});

console.log("end");

//op -  as there is no resolve promise1.then doesnt execute
start
1
3
end

//eq:
console.log("start");

const fn = () => new Promise((resolve,reject) => {
    console.log(1);
    resolve("success");
});

console.log("middle");

fn().then((res) => {
    console.log(res);
});

console.log("end");

//op - 1 is not printed before middle because promise is present in function 
//and sync code in it will execute when fun is called
start
middle
1
end
success


//eg:
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}
let promise = job();

promise
  .then(function () {
    console.log("s1");
  })
  .then(function () {
    console.log("s2");
  })
  .then(function (){
    console.log("s3");
  })
  .catch(function (){
    console.log("error");
  })
  .then(function (){
    console.log("s4");
  });

  //op
  error 
  s4

  //eg:
  function job(state) {
    return new Promise(function(resolve, reject) {
       if(state){
        resolve("success")
       }
       else{
        reject("error");
       }
    });
}
let promise = job(true);

promise
  .then(function (data) {
    console.log(data);
    return job(false); //promise chaining
  })
  .catch(function (error){
    console.log("error");
    return "Error caught"; //resolved prmse as it is a string
  })
  .then(function (data){
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
  });

  //op
  success
  error 
  Error caught
  

  //eg:
  function job(state) {
    return new Promise(function(resolve, reject) {
       if(state){
        resolve("success")
       }
       else{
        reject("error");
       }
    });
}
let promise = job(true);

promise
  .then(function (data) {
    console.log(data); //success
    return job(true);
  })
  .then(function (data) {
    if(data !== "victory"){
        throw "Defeat";
    }
    return job(true);
  })
  .then(function (data){
    console.log(data); 
  })
  .catch(function (error){
    console.log(error);//Defeat
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error); //error
    return "Error caught";
  })
  .then(function (data) {
    console.log(data); //Error caught
    return new Error("test") //(//Not returning a prmse)
  })
  .then( function (data) {
    console.log("Success", data.message); "Success test"
  })
  .catch(function (data){
    console.log("Error", data.message);
  });
  

  //Ques: Promise chaining
// Question:  create a first promise , and create a 2nd promise that resolves first promise
//   Now resolve 2nd prmse and op of which should be passed to first promise and print first promise


  const first = new Promise((resolve, reject) => {
    resolve("First");
  });

  const second = new Promise((resolve, reject) => {
    resolve(first);
  });

  second
    .then((res) => {
        return res;
    })
    .then((res) => console.log(res));


//Ques: Solve promise recursively
function promRecurse(funcPromises) {
    if(funcPromises.length === 0 ) return;
    const currPromise = funcPromises.shift();
    currPromise.then((res) => console.log(res)).catch(() => console.error(error));
    promRecurse(funcPromises);
}

//Ques: Rewrite this eg using async/await instead of then/catch

function loadJson(url) {
    return fetch(url).then((response) => {
        if(response.status == 200) {
            return response.json();
        }
        else {
            throw new Error(response.status);
        }
    });
}

loadJson("url").catch((err) =>console.log(err));

//tried soltn
async function loadJson(url) {
    try {
        const res = await fetch(url);
        return res.status;
    }
    catch (err) {
        console.log(err);
        
    }
}

//sol
async function loadJson(url) {
   
        let res = await fetch(url);
        if(res.status == 200) {
            let json = await res.json();
            return json;
        }    
        throw new Error(response.status);
}


//Ques: Promuse polyfill implementation

function PromisePolyFill(executor){

}

const examplePromise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));


  //Polyphills for promise.all,promise.race,promise.allsettled
//Implement polyphills for map, filter and reduce