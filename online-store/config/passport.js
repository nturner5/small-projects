var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    config = require('../config/main');

    module.exports = function(passport){
        var opts = {};
        opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
        opts.secretOrKey = config.secret;
        passport.use(new JwtStrategy(opts, function(jwt_payload, done){

        }))

        
    }//End of module exports