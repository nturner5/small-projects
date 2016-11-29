'use strict';
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    // jwt = require('jsonwebtoken'),
    // session = require('express-session'),
    // cors = require('cors'),
    // massive = require('massive'),
    passport = require('passport'),
    config = require('./config/main'),
    controller = require('./serverCtrl.js'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()); 
app.use(express.static('./public'))
app.use(morgan('dev'))


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  authentication
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = config.secret;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
            // or you could create a new account
        }
    });
}));


app.post('/login', passport.authenticate('jwt', { session: false}),
    function(req, res) {
        console.log('login worked')
        res.send(req.user.profile);
    }
);
app.get('/api/get-all', controller.getAll)
app.put('/api/create-user', controller.createUser)



app.listen(process.env.PORT || 3000, function(){
    console.log(`listening on port ${this.address().port}` );
})





