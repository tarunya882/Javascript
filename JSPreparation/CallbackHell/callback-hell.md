Callback Importance:  Allows asynchronous programming in JS

Issues with callbacks: 
1. Callbackhell
 Whenever there are multiple dependent Asynchronous operations it will result in a lot of nested callbacks. This will cause a 'pyramid of doom' like structure.
 It is unreadable, unmaintainable
 eg shopping cart
 createOrder -> paymentProcessing -> showOrderSummary ->  updateWallet
2. Inversion of control
Giving control of callback to another function or another API. Due to this sometimes our callback func may not be called or may be called twice etc. 