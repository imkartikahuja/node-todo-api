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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
    //   console.log(result);
    // });     //delete all Todos where text is Eat lunch

    //deleteOne delete one top one that matches the critia
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false})
    // .then((result) => {
    //   console.log(result);
    // });

    //CHALLENGE
    // db.collection('Users').deleteMany({name: 'Kartik'}).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
      _id : new ObjectID("5a914a533742c5437cde2502")
    }).then((result) => {
      console.log(result);
    });

    // db.close();  //close the connection with mongodb server
});    //to connect to DB 2 args - 1 arg is address , 2nd is callback fn
