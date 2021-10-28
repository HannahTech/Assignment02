var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index')

//GET Home
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

//GET Products
router.get('/projects', indexController.displayProjectsPage);

//GET About Me
router.get('/about', indexController.displayAboutPage);

//GET Services
router.get('/services', indexController.displayServicesPage);

//GET Contact Me  
router.get('/contact', indexController.displayContactPage);

//Get route for Add login contact
router.get('/login', indexController.displayLoginPage);

//Post route for process login contact
router.post('/login', indexController.processLoginPage);

//Get route for register contact
router.get('/register', indexController.displayRegisterPage);

//Post route for process register contact
router.post('/register', indexController.processRegisterPage);

//Get logout
router.get('/logout', indexController.performLogout);

module.exports = router;