// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app for potential testing or integration in larger applications
module.exports = app;
