var express = require('express'),
    app = express(),
    massive = require('massive'),
    config = require('./config/main');

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  database schema 
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var db = massive.connect({connectionString : config.database},
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

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  endpoint functions
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

module.exports = {
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


