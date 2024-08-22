const express = require('express');
const app = express();
app.use(express.json());  // Ajout pour gérer le JSON dans le corps des requêtes POST

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Not found');
  }
  res.send(`Payment methods for cart ${id}`);
});

// Ajout de l'endpoint GET /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Ajout de l'endpoint POST /login
app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (!userName) {
    return res.status(400).send('Username is required');
  }
  res.send(`Welcome ${userName}`);
});
