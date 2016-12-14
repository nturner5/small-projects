//##Step 1: Set up passport, passport-facebook, express
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    config = require('./config');

app.use(bodyParser.json());
app.listen(3000, function(){
    console.log(`listening on port ${this.address().port}` );
})


//These have to be set up in this order ALL EXPRESS FIRST then ALL PASSPORT, to be safe. 
app.use(session({secret: 'some-random-string'})) //Include the session middleware
app.use(passport.initialize()) //Include the passport.initialize middleware
app.use(passport.session()) //Include the passport.session middleware 

//Define the FacebookStrategy
passport.use(new FacebookStrategy({
  clientID: config.facebookId,
  clientSecret: config.facebookSecret,
  callbackURL: config.baseUrl + '/auth/facebook/callback' // this needs to match your actual endpoint
}, function(token, refreshToken, profile, done) {
  return done(null, profile);

  //code goes here such as go to DB and look for profile.id, or create user using profile.id 
}));


//##Step 2: Define your auth endpoints
//Create two routes that will handle your Facebook auth.
app.get('/auth/facebook', passport.authenticate('facebook')) //This route simply implements the passport.authenticate method, passing 'facebook' as the parameter.
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    //never put your start endpoint as your redirect
    successRedirect: '/me',
    failureRedirect: '/login'
})); //This route needs to pass the passport.authenticate method again, except we also need to pass in an object that passes the successRedirect and failureRedirect paths.


//##Step 3: Create the deserialize/serializer methods on passport.
//preps data to put on session
passport.serializeUser(function(user, done) {
  done(null, user);
});
// Gets data from session and preps for req.user 
passport.deserializeUser(function(obj, done) {
  done(null, obj);
  //whatever we pass along to done gets put on req.session
});

//###Step 4: Create viewer endpoint
//Now we're going to create an endpoint that returns the current logged in user's Facebook profile data.

app.get('/me', function(req, res){
    res.send(req.user)
})

// all login buttons must be links not <button>  must be an <a> 
// when you push live, it won't work with ip address, need a domain name. 