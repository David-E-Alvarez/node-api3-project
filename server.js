const express = require('express');

const server = express();

server.use(express.json());
server.use(logger);
server.use(validateUserId);

//defining user routes
const userRouter = require('./users/userRouter.js');
server.use('/api/users', userRouter);
//define post routes
const postRouter = require('./posts/postRouter.js');
server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h1>Let's write some middleware!</h1>`);
});

//custom middleware
function logger(req, res, next) {
  console.log( `Request method:  ${req.method}, Request url: ${req.url}, Timestamp: ${new Date().toISOString()}`);
  next();
}

// validateUserId()
function validateUserId(req,res,next){
  // [ ] "validateUserId()" validates the user id on every request that expects a user id parameter
  // [ ]if the id parameter is valid, store that user object as req.user
  // [ ]if the id parameter does not match any user id in the database, cancel the request and respond with status 400 and { message: "invalid user id" }
  next();
}

module.exports = server;


















// server.use(atGate);
// // server.use(auth);

// server.get('/mellon', auth, (req,res) => {
//   console.log('Gate opening...');
//   console.log('Inside and safe!');
//   res.send('Welcome Traveler!');
// })


// function atGate(req, res, next){
//   console.log('At the gate, about to be eat')
//   next();
// }

// function auth(req, res, next){
//   console.log("---------->", req.url)
//   if(req.url === '/mellon'){
//     next();
//   }else{
//     res.send('You shall not pass!')
//   }
// }
