const express = require('express');

const router = express.Router();

const Posts = require('./postDb.js');

router.get('/', (req, res) => {
  // do your magic!
  Posts.get()
    .then(posts => {
      console.log('------------>', posts);
      res.status(201).json(posts)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
  Posts.getById(req.params.id)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json({error_message: error})
    })

});

router.delete('/:id', (req, res) => {
  // do your magic!
  Posts.remove(req.params.id)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.put('/:id', (req, res) => {
  // do your magic!
  Posts.update(req.params.id, req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
