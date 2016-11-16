'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');

var db = massive.connect({connectionString : 'postgres://postgres@localhost:5432/online_store'},
function(err, localdb){
  db = localdb;
  app.set('db', db);
  db.set_table(function(){
    console.log('Table Init');
  });
//   db.vehicle_create_seed(function(){
//     console.log("Vehicle Table Init")
//   });
})


app.use(bodyParser.json())
app.use(express.static('./public'))

app.listen(process.env.PORT || 3000, function(){
    console.log(`listening on port ${this.address().port}` );
})