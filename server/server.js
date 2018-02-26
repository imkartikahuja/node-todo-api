const express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos})   //send object instead of only array of todos
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;     //req.params have key value pairs of params passed

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }, (e) => {
    res.status(400).send();
  });
});

app.listen(port,() => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
