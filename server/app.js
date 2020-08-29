const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 5000;

// routes
const prime_numbers = require(__dirname + '/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Import Routes
app.use(prime_numbers);

app.get('/', (req, res) => {
  res.send('PORT 5000');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  ;
  console.log('Listening on port ' + port);
});
