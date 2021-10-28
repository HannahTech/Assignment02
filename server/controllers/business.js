let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let BusinessContact = require('../models/business');

module.exports.displayContactList = (req, res, next) => {
    BusinessContact.find((err, contactsList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business/contact', {title:'Contact List', ContactsList: contactsList, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req,res,next) =>{
    res.render('business/add', {title:'Add Contact',
    displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage = (req,res,next) =>{
    let newContact = BusinessContact({
        "Name" : req.body.Name,
        "Number" : req.body.Number,
        "Email" : req.body.Email
    });
    BusinessContact.create(newContact, (err, BusinessContact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/business-contact');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    BusinessContact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('business/edit', {title: 'Edit Contact', 
                business: contactToEdit, displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req,res,next) =>{
    let id = req.params.id;

    let updateContact = BusinessContact({
        "_id": id,
        "Name" : req.body.Name,
        "Number" : req.body.Number,
        "Email" : req.body.Email
    });
    BusinessContact.updateOne({_id: id}, updateContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/business-contact');
        }
    });
}

module.exports.performDelete = (req,res,next) => {
    let id = req.params.id;

    BusinessContact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/business-contact');
        }
    })
}