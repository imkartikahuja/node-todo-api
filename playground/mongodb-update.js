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

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5a914744cd978c42993e1e19')
    // },{
    //   $set: {
    //     completed: true
    //   }
    // },{
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a905c8358dcc336167d4f1e')
    },{
      $set : {
        name: 'Kartik'
      },
      $inc: {
        age: 2
      }
    },{
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });



    // db.close();  //close the connection with mongodb server
});    //to connect to DB 2 args - 1 arg is address , 2nd is callback fn
