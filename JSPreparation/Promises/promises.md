**Promise**
Promise is an object that represents eventual completion of an async operation

When js hits async/api call function it returns subpromise with data/promiseresult undefined and promisestate pending and whenever we get data it automatically populates data with api result when it gets the value from API call.

Using promises we can **attach** callback function to promise object

Promise has 3 states pending, fullfilled, rejected
Promise objects are immutable - we cannot alter OR mutate the data in promise
Promises create trust in transaction
To avoid inversion of control we use promises.
Promise chaining helps to solves callback hell. We need to return result in promise chaining so that we don't miss any data in chaining.


Create a promise:

To create a promise we use new keyword along with Promise constructor
 const promise = new Promise();
Promise constructor takes a function that has 2 params i.e resolve and reject functinons which
are provided by JS to create promise
resolve or reject can be called only once in a promise.
 const promise = new Promise(function(resolve, reject) {

 });

Promise chaining:
If string is returned from .then in promise chaining then it is considered as resolved  
catch handles all the errors of then above it. Below catch if we write any then it wont handle


Promise Combinators:
1. Promise.all - .. and returns all fullfilled promises. If any one promise fail then it will fail all promises.
2. Promise.race - returns first promise that gets fullfilled or rejected
3. Promise.allSettled - same as Promise.all but if anyone promise fail it returns fullfilled promises as well
4. Promise.any - Only returns first fullfilled promise and ignores all rejected ones.But if all promises fail then it will show rejected msg


Modern way of handling promises is using async and await
await waits till promise is fullfilled or rejected
async tells that function is async

Use try catch blocks to handle errors in async await