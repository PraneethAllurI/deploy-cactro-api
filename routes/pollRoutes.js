const express = require('express');
const router = express.Router();
const controller = require('../controllers/pollController');

// Route to create a poll
router.post('/polls', controller.createPoll);

// Route to vote on a poll
router.post('/polls/:id/vote', controller.fetchPollById);

// Route to get poll results
router.get('/polls/:id', controller.displayPoll);

router.get('/', (req, res) => {
    res.send("The API is working but there's a DB error");
  });  

module.exports = router; 
