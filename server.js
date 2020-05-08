const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");

const server = express();


server.use(express.json());
server.use(logger);

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
