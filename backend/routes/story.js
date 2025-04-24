const express = require('express');

const { uploadStory } = require('../controllers/story');

const router = express.Router()

router.post('/upload',uploadStory);



module.exports = router;