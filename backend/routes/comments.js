const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.post('/postComment', commentsController.postComment);
router.get('/getComments/:id', commentsController.getComments);

module.exports = router;