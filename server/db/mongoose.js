var mongoose = require('mongoose');

const REMOTE_MONGO = 'mongodb://todoapp:imkartikahuja@ds249718.mlab.com:49718/todo-app';
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to Mongo instance.')
}, (err) => {
  console.log('Error connecting to Mongo instance: ', err);
});

module.export = { mongoose };
