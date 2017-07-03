const   express = require('express'),
        router = express.Router(); 

//Register
router.get('/register', (req, res, next) => {
    res.send('REGISTER');

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
