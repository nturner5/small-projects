const express = require('express');
const bodyParser = require('body-parser'); 
const app = express(); 
const data = require('./data')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/endpoint1', function(req, res, next){
  res.send('This is the data')
})

app.listen(3000, function(){
  console.log(`listening on port ${this.address().port}`);
})