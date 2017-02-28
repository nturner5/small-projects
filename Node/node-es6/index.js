import express from 'express';

const app = express();

app.use(express.static('./public'));

app.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
});
