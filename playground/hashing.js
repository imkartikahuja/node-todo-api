const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10,(err,salt) => {       //10 is no of rounds
//   bcrypt.hash(password, salt, (err,hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$D5EzOM8.uJtcvEufkKYVmOr4sT2/shj5wI2hgBXg1kF1M0IPsDi1y';

bcrypt.compare(password,hashedPassword, (err,res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');       //second arg is SALT(secret)
//
// console.log(token);
//
// var decoded = jwt.verify(token,'123abc');
// console.log('decoded', decoded);

// var message = "I am user number 3";
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// //This is how JWT works so we will use JWT and not implement this by our own
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash) {
//   console.log('Data was not change');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
