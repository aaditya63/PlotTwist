const express = require('express');
const { signup, login, checkAuth, logout } = require('../controllers/user');

const router = express.Router()

router.post('/signup',signup);
router.post('/login',login);
router.get('/check-auth',checkAuth);
router.get('/logout',logout);




module.exports = router;