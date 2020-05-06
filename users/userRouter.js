const express = require('express');

const router = express.Router();

const Users = require('./userDb.js');

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

router.post('/:id/posts', (req, res) => {
  // do your magic!
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

router.get('/:id', (req, res) => {
  // do your magic!
  Users.getById(req.params.id)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  Users.getUserPosts(req.params.id)
    .then(posts => {
      res.status(201).json(posts)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  Users.remove(req.params.id)
    .then(response => {
      console.log('-------------------->',response)
      res.status(201).json(response)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.put('/:id', (req, res) => {
  // do your magic!
  Users.update(req.params.id, req.body)
    .then(change => {
      console.log('---------------->', change)
      res.status(201).json(change)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
