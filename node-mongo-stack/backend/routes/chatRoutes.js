const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getMessages);
router.post('/', chatController.createMessage);

module.exports = router; 