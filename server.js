// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// settings
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/', (req, res)=>{
    res.send("I'm Alive");
})

app.listen('8000', (req, res)=>{
    console.log('running on port 8000')
})