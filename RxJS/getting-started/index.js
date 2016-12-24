'use strict';
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    Rx = require('rx'),
    axios = require('axios'),
    q = require('q');
    var http = require('http')


app.use(bodyParser.json());
app.listen(process.env.PORT || 3000, function () {
  console.log(`listening on port ${this.address().port}`);
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
                          RxJS
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



var users = ['jonmyrick7401', 'JoshuaBaert', 'Steven-Nagie', 'SterlingChin', 'alexisgraff5']


var source = Rx.Observable.from(users)
  .flatMap(user => axios.get(`https://api.github.com/users/${user}`))


var subscription = source.subscribe(
  response => console.log(`onNext: ${response.data.name}`),
  error => console.log(`onError: ${error}`),
  () => console.log(`Completed http request cycle`));


// Using a timer

// console.log('Current time: ' + Date.now());

// var source = Rx.Observable.timer(5000,1000)
//    .timestamp();

// var subscription = source.subscribe(
//   function (x) {
//     console.log(x.value + ': ' + x.timestamp);
//   });







axios.get('https://api.github.com/users/jonmyrick7401').then(response => {
  console.log(response.data.name)
})
