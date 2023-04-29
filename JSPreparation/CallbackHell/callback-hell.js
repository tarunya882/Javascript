/**
 * Callback Hell
 */
const cart = ["tshirts", "ball", "toys"];

api.createOrder(cart, function() {
    api.processPayment(function() {
        api.sendOrderSummary(function() {
            api.updateWallet();
        })
    })
})
