const express = require('express');
const { userController } = require('../controller');
const router = express.Router();
const { auth } = require('../helper/auth');

router.get('/getusers', userController.getUsers);
router.get('/getbyid/:id', userController.getUserbyId);
router.post('/login', userController.login);
router.post('/keeplogin',auth, userController.keepLogin);
router.post('/register', userController.register);
router.post('/emailVerification', userController.emailVerification);
router.post('/resendVerification', userController.resendVerification);
router.post('/editpassword', userController.editPassword);
router.delete('/deleteuser/:id', userController.deleteUser);
router.patch('/edituser/:id', userController.editUser);


module.exports = router;