var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    massive = require('massive'),
    serverCtrl = require('./serverCtrl.js'); 

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());
app.use(express.static('./dist'))
app.use(morgan('dev'))

app.listen(process.env.PORT || 3000, function () {
  console.log(`listening on port ${this.address().port}`);
})