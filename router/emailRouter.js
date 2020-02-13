const express = require('express');
const { emailController } = require('../controller');
const router = express.Router();

router.post('/sendmail', emailController.sendEmail)

module.exports = router