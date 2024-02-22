const express = require('express');
const path = require('path');
const ejs = require('ejs');

const router = express.Router();

const bodyParser = require('body-parser');
const UserController = require('../controllers/fbdeskController');


router.get('/register', UserController.registerView);

// router.get('/' , (req, res) =>{
//     res.render('index');
// });


router.post('/register', UserController.register);
router.post('/login', UserController.login);


module.exports = router;
