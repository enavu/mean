const   express = require('express'),
        router = express.Router(), 
        passport = require('passport'),
        jwt = require('jsonwebtoken');

const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password

    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register User'});
        }else{
            res.json({success:true, msg:'User Registered'})
        }
    })

});

//Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

//Portfolio
router.get('/portfolio', (req, res, next) => {
    res.send('PORTFOLIO');
});

module.exports = router;
