// Express Server and Middleware Imports
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('../db/index');

const app = express();
const port = 3002;

app.use(morgan('tiny'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(path.join(__dirname, '../public')));

app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/bundle.js'));
});

app.get('/:id', (req, res) => {
  db.find(req.params)
    .then(products => res.status(202).send(products));
});

app.get('/api/products', (req, res) => {
  db.find(req.query)
    .then(products => res.status(202).send(products));
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
