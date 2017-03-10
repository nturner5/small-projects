const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', (req, res) => res.send('Here is the data')) 

app.listen(3000, function(){
  console.log(`listening on port ${this.address().port}`)
})