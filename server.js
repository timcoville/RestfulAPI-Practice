// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// settings
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// mongoose
mongoose.connect('mongodb://localhost/1955_db');

var NameSchema = new mongoose.Schema ({
    name: String
}, {timestamps: true})

mongoose.model('Name', NameSchema)

var Name = mongoose.model('Name');

app.get('/', (req, res)=>{
    Name.find({},(err, data)=>{
        if(err)console.log(err)
        else {
            res.json(data);
        }
    } )
    
})

app.get('/new/:name/', (req, res)=>{
    Name.create({name:req.params.name}, (err, data)=>{
        console.log(data)
        res.redirect('/')
    })
})

app.get('/:name', (req, res)=>{
    Name.findOne({name: req.params.name}, (err, data)=>{
        if (err) console.log(err)
        else {
            res.json(data)
        }
    })
})

app.get('/delete/:name', (req, res)=>{
    Name.deleteOne({name:req.params.name}, (err, data)=>{
        console.log(data)
        res.redirect('/')
    })
})

app.listen('8000', (req, res)=>{
    console.log('running on port 8000')
})