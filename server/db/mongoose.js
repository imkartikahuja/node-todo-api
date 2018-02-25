var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //to use JS promises
mongoose.connect('mongodb://localhost:27017/TodoApp'); //it waits to connect then continue to run down and it will maintain connection

module.exports = {mongoose};
