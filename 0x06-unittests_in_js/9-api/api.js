const express = require('express');
const app = express();

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Ajout du nouvel endpoint GET /cart/:id avec validation que :id est un nombre
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Not found');
  }
  res.send(`Payment methods for cart ${id}`);
});
