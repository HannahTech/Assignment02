let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    Name: String,
    Number: String,
    Email: String
},
{
    collection: "business"
})

module.exports = mongoose.model('BusinessContact', contactModel)