var express = require('express');
const math = require('mathjs');

var app = express();

console.log(math.sqrt(98));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3003, function () {
  console.log('Example app listening on port 3000!');
});
