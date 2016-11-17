'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport')
var TwitterStrategy = require('passport-twitter').Strategy;
var LocalStrategy = require('passport-local').Strategy;

passport.use(new TwitterStrategy({
  
}))

var db = massive.connect({connectionString : 'postgres://postgres@localhost:5432/online_store'},
(err, localdb)=> {
  db = localdb;
  app.set('db', db);
  db.set_products(()=> {
    console.log('products table successfully reset');
  });
  db.set_users(()=> {
    console.log('users table successfully reset');
  });
})

app.use(bodyParser.json())
app.use(express.static('./public'))

app.listen(process.env.PORT || 3000, function(){
    console.log(`listening on port ${this.address().port}` );
})



app.post('/login', passport.authenticate('local'),
  function(req, res) {
    console.log('If this function gets called, authentication was successful.')
    // `req.user` contains the authenticated user.
    // res.redirect('/users/' + req.user.username);
    res.send(req.user.username)
});



app.get('/api/get-all', (req, res)=> {
  db.get_all((err, data)=> {
    if (err) console.log(err);
    else res.status(200).send(data)
  })
})
app.put('/api/create-user', (req, res)=> {
  db.create_user((err, data)=> {
    if (err) console.log(err);
    else res.status(200).send(data)
  })
})


