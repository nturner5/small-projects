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

let db = massive.connect({
    connectionString: config.database
  },
  (err, localdb) => {
    db = localdb;
    app.set('db', db);
    db.set_products((err, data) => {
      if (err) console.log(err);
      else console.log('All tables successfully reset');
    });
  })

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  These function will be sent after endpoint finishes  
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let createJWT = user => {
  let payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(1, 'day').unix()
  }
  return jwt.encode(payload, config.TOKEN_SECRET)
}
let getSafeUser = user => user;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  endpoint functions
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

module.exports = {
  login: (req, res, next) => {
    db.users.findOne({
      username: req.body.username
    }, (err, user) => {
      if (err) return next(err)
      else if (!user) return res.status(401).send({
        message: "invalid entry"
      })
      else {
        db.comparePassword = (candidatePassword, cb) => {
          bcrypt.compare(candidatePassword, req.body.password, (err, isMatch) => {
            cb(err, isMatch);
          });
        };
        res.send({
          token: createJWT(user),
          user: getSafeUser(user)
        })
      }
    })
  },
  signup: (req, res, next) => {
    db.users.findOne({
      username: req.body.username
    }, (err, user) => {
      if (user) return res.status(409).send({
        message: 'username is already taken'
      });
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(req.body.password, salt, null, (err, hash) => {
          if (err) return next(err);
          db.create_user([req.body.username, hash, req.body.firstname, req.body.lastname], (err, users) => {
            if (err) return next(err)
            db.users.findOne({
              username: req.body.username
            }, (err, user) => {
              if (err) return next(err)
              return res.send({
                token: createJWT(user),
                user: getSafeUser(user)
              })
            })
          })
        })
      })
    })
  },
  getAll: (req, res, next) => {
    db.get_all((err, data) => {
      if (err) return next(err);
      else return res.status(200).send(data)
    })
  },
  addToCart: (req, res, next) => {
    db.get_order(req.body.userId, (err, order) => {
      if (err) return next(err);
      if (order[0] && !order[0].completed) {
        db.add_to_cart([order[0].id, req.body.item], (err, cart) => {
          if (err) return next(err);
          db.get_cart(order[0].id, (err, cart) => {
            if (err) return next(err);
            return res.send(cart);
          })
        })
      } else {
        db.create_order(req.body.userId, (err, data) => {
          if (err) return next(err);
          db.get_order(req.body.userId, (err, order) => {
            if (err) return next(err);
            db.add_to_cart([order[0].id, req.body.item], (err, data) => {
              if (err) return next(err);
              db.get_cart(order[0].id, (err, cart) => {
                if (err) return next(err);
                return res.send(cart);
              })
            })
          })
        })
      }
    })
  },
  checkOut: (req, res, next) => {
    // if(err) return res.send('error')
    db.check_out(req.body.userId, (err, data) => {
      if (err) return next(err);
      else res.send([]);
    })
  }

}; //End of module exports