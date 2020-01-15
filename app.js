const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/greetings', (req, res) => {
  const name = req.query.name;
  const race = req.query.race;
  //validate values
  if (!name) {
    //name was not provided
    return res.status(400).send('Please provide a name');
  }
  if (!race) {
    //race was not provided
    return res.status(400).send('Please provide a race');
  }
  const greeting = `Greetings ${name} the ${race}, welcome to our kingdom`;
  res.send(greeting);
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});
