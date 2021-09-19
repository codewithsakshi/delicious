const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', function (req, res) {
  res.send('Welcome to delicious server');
});

app.listen(PORT, function () {
  console.log('Delicious server running on port' + PORT);
});

app.post('/login', function (req, res) {});

app.post('/signup', function (req, res) {});
