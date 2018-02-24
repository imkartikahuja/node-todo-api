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

    // db.collection('Todos').find({
    //   _id: new ObjectID('5a911427cd978c42993e19ea')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //   console.log('Unable to fetch Todos',err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch Todos',err);
    // });

    db.collection('Users').find({
      name:'Kartik'
    }).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
      console.log('Unable to fetch Users',err);
    });

    // db.close();  //close the connection with mongodb server
});    //to connect to DB 2 args - 1 arg is address , 2nd is callback fn
