var express = require('express'),
    app = express(),
    massive = require('massive'),
    config = require('./config/main'),
    jwt = require('jwt-simple'),
    moment = require('moment'),
    bcrypt = require('bcrypt-nodejs');

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  database schema 
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var db = massive.connect({connectionString : config.database},
(err, localdb)=> {
  db = localdb;
  app.set('db', db);
  db.set_products((err, data)=> {
    if (err) console.log(err);
    else console.log('All tables successfully reset');
  });
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  These function will be sent after endpoint finishes  
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function createJWT(user){
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(1, 'day').unix()
  }
  return jwt.encode(payload, config.TOKEN_SECRET)
}

function getSafeUser(user){
  return user;
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  endpoint functions
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

module.exports = {
  login: (req, res, next)=> {
    db.users.findOne({username: req.body.username}, function(err, user){
      if (err) return next(err)
      else if (!user) return res.status(401).send({message: "invalid entry"})
      else{
        db.comparePassword = function(candidatePassword, cb) {
          bcrypt.compare(candidatePassword, req.body.password, function(err, isMatch) {
            cb(err, isMatch);
          });
        };
        res.send({token: createJWT(user), user: getSafeUser(user)})
      }
    })
  },
  signup: (req, res, next)=> {
    db.users.findOne({username: req.body.username}, function(err, user){ 
      if(user) return res.status(409).send({message: 'username is already taken'});
      else{
        bcrypt.genSalt(10, function(err, salt){
          if (err) return next(err);
          bcrypt.hash(req.body.password, salt, null, function(err, hash){
            if(err) return next(err);
            db.create_user([req.body.username, hash, req.body.firstname, req.body.lastname], function(err, users){
              if (err) {return next(err)}
              db.users.findOne({username: req.body.username}, function(err, user){
                if(err) return next(err)
                res.send({token: createJWT(user), user: getSafeUser(user)})
              })
            })
          })
        })
      }
    })
  },
  getAll: (req, res)=> {
    db.get_all((err, data)=> {
      if (err) console.log(err);
      else res.status(200).send(data)
    })
  },
  createUser: (req, res)=> {
    db.create_user((err, data)=> {
      if (err) console.log(err);
      else res.status(200).send(data)
    })
  }

    
};//End of module exports


