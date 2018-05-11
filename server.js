// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('./server/config/routes.js')(app)

// settings
app.use(bodyParser.json());
require('./server/config/mongoose');
require('./server/config/routes');

app.listen('8000', (req, res)=>{
    console.log('running on port 8000')
})