const mongoose = require('mongoose');
var Name = require('./../models/models');

module.exports = {
    index: (req, res)=>{
        Name.find({},(err, data)=>{
            if(err)console.log(err)
            else {
                res.json(data);
            }
        } )
    },
    create: (req, res)=>{
        Name.create({name:req.params.name}, (err, data)=>{
            console.log(data)
            res.redirect('/')
        })
    },
    record: (req, res)=>{
        Name.findOne({name: req.params.name}, (err, data)=>{
            if (err) console.log(err)
            else {
                res.json(data)
            }
        })
    },
    delete: (req, res)=>{
        Name.deleteOne({name:req.params.name}, (err, data)=>{
            console.log(data)
            res.redirect('/')
        })
    }
};