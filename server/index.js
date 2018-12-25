// Express Server and Middleware Imports
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/index');

const app = express();
const port = 3002;

app.use(express.static('public'));
app.use(morgan('tiny'));

app.get('/api/products', (req, res) => {
  db.find(req.query)
    .then(products => res.status(202).send(products));
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
