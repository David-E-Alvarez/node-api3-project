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
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
