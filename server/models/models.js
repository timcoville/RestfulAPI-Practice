const mongoose = require('mongoose');

var NameSchema = new mongoose.Schema ({
    name: {type: String, require: true},
}, {timestamps: true});

module.exports = mongoose.model('Name', NameSchema)

