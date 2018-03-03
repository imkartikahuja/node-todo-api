const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user')

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'test@test.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token:  jwt.sign({_id: userOneId, access: 'auth'},'abc123').toString()
  }]
},{
  _id: userTwoId,
  email: 'kartik@exmaple.com',
  password: 'userTwoPass'
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
},{
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 123456789
}];

const populateTodos = (done) => {    //run before every test
  Todo.remove({}).then(() => {    //remove everything
    return Todo.insertMany(todos);
  }).then(() => done());
};

//we cant use insertMany bcoz it wont hash password
const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new  User(users[0]).save(); //by running save we will run middleware to hash password
    var userTwo = new User(users[1]).save();

    //we want to wait for both to succeed
    return Promise.all([userOne,userTwo])   //then will be called after both the promises get resolved
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
