const express = require('express');

const router = express.Router();

const Users = require('./userDb.js');
const Posts = require('../posts/postDb.js');


router.post('/', (req, res) => {
  // do your magic!
  Users.insert(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json(error)
    })

});

//think i need to get posts first to see what posts are
//api/users
router.post('/:id/posts', (req, res) => {
  // do your magic!  
  Users.getUserPosts(req.params.id)
    .then(posts => {
      // console.log("------------->", posts)
      // res.status(201).json(something)
      Posts.insert(req.body)
        // console.log('req.body------>,', req.body.text)
        .then(something => {
          // console.log('---------------->', something)
          res.status(201).json(something)
        })
        .catch(error => {
          res.status(500).json(error)
        })
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.get('/', (req, res) => {
  // do your magic!
  Users.get()
    .then(resources => {
      res.status(201).json(resources)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  Users.getById(req.params.id)
    .then(user => {
      console.log("here---->",user)
      res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  Users.getUserPosts(req.params.id)
    .then(posts => {
      res.status(201).json(posts)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  Users.remove(req.params.id)
    .then(response => {
      res.status(201).json(response)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.put('/:id', validateUser, (req, res) => {
  // do your magic!
  Users.update(req.params.id, req.body)
    .then(change => {
      res.status(201).json(change)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

//custom middleware


// validateUserId()
function validateUserId(req,res,next){
  Users.getById(req.params.id)
    .then(user =>{
      console.log("--------->", user)
      if(user){
        req.user = user;
        next();
      }else{
        res.status(400).json("sorry no user")
        next();
      }
      // res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json(error)
    })
}

function validateUser(req, res, next) {
  // do your magic!
}

// function validatePost(req, res, next) {
//   // do your magic!
// }


module.exports = router;
