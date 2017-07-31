const   express = require('express'),
        router = express.Router(), 
        passport = require('passport'),
        jwt = require('jsonwebtoken'),
        config = require('../config/database');
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
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username,
        password = req.body.password;

        User.getUserByUsername(username, (err, user) => {
            if (err) throw err;
            if(!user){
                return res.json({success:false, msg: "user not found"});
            }

            User.comparePassword(password, user.password, (err, isMatch) =>{
               if (err) throw err;
            if(isMatch){
            const token = jwt.sign(user, config.secret, {
                expiresIn:604800 //1week 
            });
            res.json({
                success:true,
                token: 'JWT ' + token,
                user:{
                    id:user._id,
                    name: user.username,
                    email: user.email
                }
            });   
        }else{
            return res.json({success:false, msg: "Password doesn't match"});
            
        } 
        
            })
        })
});

//Portfolio
router.get('/portfolio',passport.authenticate('jwt', {session:false}) ,(req, res, next) => {
    res.send('PORTFOLIO');
});

//Portfolio
router.get('/profile',passport.authenticate('jwt', {session:false}) ,(req, res, next) => {
    res.send('profile');
});
module.exports = router;
