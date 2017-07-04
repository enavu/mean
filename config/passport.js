const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    User = require('../models/user'),
    config = require('../config/database');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;
    
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById("595adf48b7389919de022461" , (err, user)=> {
            if(err){
                return  done(err, false);
            }
            if(user){
                return done (null, user);
            }
            else{
                return done(null, false);
            }
        })
    }));
}