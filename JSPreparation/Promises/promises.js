const GITHUB_URL = "https://api.github.com/users/tarunya882";
const user = fetch(GITHUB_URL);

console.log("user", user);
/**
 * o/p Promise pending at the time this line is executed,
 * but when you expand it shows promiseResult fullfilled because after some time
 * we got data and promise is fullfilled
 */

/**
 * Promise chaining
 */
const cart = ["tshirts", "ball", "toys"];

/**callback hell */
createOrder(cart, function () {
  processPayment(function () {
    sendOrderSummary(function () {
      updateWallet();
    });
  });
});

// promise chaining
createOrder(cart)
  .then(function (orderId) {
    return processPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });

/**
 * Create a promise
 */

//consumer

const cart = ["tshirts", "ball", "toys"];
//consumer
const promise = createOrder(cart);
console.log("promise", promise);
promise
  .then(function (orderId) {
    console.log("orderId", orderId);
  })
  .catch(function (err) {
    console.log(err);
  });

//producer
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    console.log("vartt", validateCart(cart));
    if (!validateCart(cart)) {
      //create error msg when cart is invalid
      const err = new Error("Cart is invalid");
      reject(err);
    }
    const orderId = "12345";
    setTimeout(function () {
      resolve(orderId);
    }, 8000);
  });
  return promise;
}

function validateCart(cart) {
  return cart.reduce((arr, curr) => {
    if (arr) arr = curr ? true : false;
    return arr;
  }, true);
}

/** Promise chaining */

//consumer
const cart = ["tshirts", "ball", "toys"];
//consumer
const promise = createOrder(cart);
console.log("promise", promise);

// promise chaining with catch block for each then
promise
  .then(function (orderId) {
    console.log("orderId", orderId);
    return orderId;
  })
  .catch(function (err) {
    // this  catch will only handle all errors on top of it (above then's).
    console.log(err);
  })
  .then(function (orderId) {
    //no mater what happen (error or success of above then) this then will be called
    return proceedToPayment(orderId); // returning promise
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log("err", err);
  });

// promise chaining wuth single catch
promise
  .then(function (orderId) {
    console.log("orderId", orderId);
    return orderId;
  })
  .then(function (orderId) {
    // if above then fails this then will not be called
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log("err", err);
  });

//producer
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    console.log("vartt", validateCart(cart));
    if (!validateCart(cart)) {
      //create error msg when cart is invalid
      const err = new Error("Cart is invalid");
      reject(err);
    }
    const orderId = "12345";
    setTimeout(function () {
      resolve(orderId);
    }, 8000);
  });
  return promise;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successful");
  });
}

function validateCart(cart) {
  return cart.reduce((arr, curr) => {
    if (arr) arr = curr ? true : false;
    return arr;
  }, true);
}

/**
 * Output questions
 */

//q1:
console.log("start");

const promise = new Promise(function (resolve) {
  console.log(1);
  resolve(2);
});

promise.then(function (res) {
  console.log(res);
});

console.log("end");

//op - start
1;
end;
2;
//Even though promise is asynchronous JS when executes or finds promise block it
// executes sync code in it first and async is executed later. Due to that 1 is printed

//q2:
console.log("start");

const promise = new Promise(function (resolve) {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise.then(function (res) {
  console.log(res);
});

console.log("end");

//op -
start;
1;
3;
end;
2;

//q3:
console.log("start");

const promise = new Promise(function (resolve) {
  console.log(1);
  console.log(3);
});

promise.then(function (res) {
  console.log(res); // this will not be executed because as promise is not resolved or rejected it wont execute .then
});

console.log("end");
//op:
start;
1;
3;
2;
