const express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());       //middleware convert string into object of req

app.post('/todos', (req,res) => {
    var todo = new Todo({
      text: req.body.text
    });

    todo.save().then((result) => {
      res.send(result);
    }, (e) => {
      res.status(400).send(e);
    });
});

app.listen(3000,() => {
  console.log('Started on port 3000');
});
