'use strict';
var config = require('./config/main'),
    controller = require('./serverCtrl.js'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    // jwt = require('jsonwebtoken'),
    // session = require('express-session'),
    // massive = require('massive'),
    // passport = require('passport'),
    // JwtStrategy = require('passport-jwt').Strategy,
    // ExtractJwt = require('passport-jwt').ExtractJwt,
    jwt = require('jwt-simple'),
    moment = require('moment');
    
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()); 
app.use(express.static('./public'))
app.use(morgan('dev'))


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  passport authentication
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
// opts.secretOrKey = config.secret;
// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.sub}, function(err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             done(null, user);
//         } else {
//             done(null, false);
//             // or you could create a new account
//         }
//     });
// }));


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  jwt-simple authentication
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// This middleware checks you JWToken to make sure that you are logged in. 
function ensureAuthenticated(req, res, next) {  //use this middleware when... you want the user to be authenticated before hitting an endpoint. Example --> updating personal information or sending a message to someone. 
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[1];
  var payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ message: err.message });
  }
  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}

app.post('/auth/login', controller.login)
app.post('/auth/signup', controller.signup)
app.get('/api/get-all', controller.getAll)
app.put('/api/create-user', controller.createUser)


app.listen(process.env.PORT || 3000, function(){
    console.log(`listening on port ${this.address().port}` );
})





