const { render } = require('ejs');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let contactController = require('../controllers/business');

//Helper function
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Get route
router.get('/', contactController.displayContactList);

//Get route for Add contact
router.get('/add', requireAuth, contactController.displayAddPage);

//Post route for Add contact
router.post('/add', requireAuth, contactController.processAddPage);

//Get route for edit contact
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

//Post route for edit contact
router.post('/edit/:id', requireAuth, contactController.processEditPage);

//Get Delete contact
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;