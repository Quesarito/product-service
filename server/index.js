// Server and express setup
const express = require('express');
const app = express();
const port = 3002;

// Database import
const db = require('../db/index');

app.listen(port, () => console.log(`Listening on port ${port}.`));

