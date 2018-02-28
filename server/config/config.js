var env = process.env.NODE_ENV || 'development';
console.log('env ****', env);

var REMOTE_MONGO = 'mongodb://todoapp:imkartikahuja@ds249718.mlab.com:49718/todo-app';
var LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
 process.env.MONGODB_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

if(env === 'development'){
  process.env.PORT = 3000;
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
