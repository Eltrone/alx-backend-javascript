//app.js
const express = require('express');
const app = express();

app.listen(7865, () => {
    console.log('API available on localhost port 7865');

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// New endpoint with validation for numeric id
app.get('/cart/:id', (req, res) => {
  const cartId = parseInt(req.params.id);
  if (isNaN(cartId)) return res.status(404).send('Invalid cart ID');

  const paymentMethods = ['Visa', 'Mastercard', 'PayPal'];
  res.send(`Payment methods for cart ${cartId}: ${paymentMethods.join(', ')}`);
});
