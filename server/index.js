// Express Server and Middleware Imports
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/index');


const app = express();
const port = 3002;

// Database import


app.use(express.static('public'));
app.use(morgan('tiny'));
// app.use(bodyParser.json());


app.listen(port, () => console.log(`Listening on port ${port}.`));
