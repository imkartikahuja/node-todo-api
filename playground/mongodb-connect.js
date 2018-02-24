// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //ES6 destructing create a new var of name MongoClient and put value equal to prop MongoClient of mongodb

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {    //TodoApp is DB name, db is object used to manipulate data
    if(err)
    {
      return console.log('Unable to connect MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err,result) => {
    //   if (err){
    //     return console.log('Unable to insert todo',err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));  //ops stores all the docs that were inserted
    // });

    // db.collection('Users').insertOne({
    //   name: 'Kartik',
    //   age: 20,
    //   location: 'Noida'
    // }, (err,result) => {
    //     if(err){
    //       return console.log('Unable to insert user', err);
    //     }
    //
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });

    db.close();  //close the connection with mongodb server
});    //to connect to DB 2 args - 1 arg is address , 2nd is callback fn
