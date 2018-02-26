const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = '5a93163c1a2966cc5d60794211';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({       //returns array
//   _id: id       //auto new ObjectID(id)
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({          //return the first one that matches returns document not array
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');;
//   }
//   console.log('Todo By Id',todo);
// }).catch((e) => console.log(e));

 var id = '5a919d376907662810003cc2';

User.findById(id).then((user)=> {
  if(!user){
    return console.log('Id not found');
  }
  console.log('User By id',JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));
