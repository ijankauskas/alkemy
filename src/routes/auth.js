const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');

router.get('/login', authController.login);
router.post('/login', authController.processLogin);

router.get('/register', authController.register);
router.post('/register', authController.processRegister);

module.exports = router;