const express = require('express');
const router = express.Router();

const authController = require('../controller/auth.controller');

// connect user with jwt
router.post('/login', authController.connectUserWithJwt);

// sign up user with jwt
router.post('/signup', authController.signUpUserWithJwt);

module.exports = router;
