const express = require("express");
const router = express.Router();
const UserController = require("../controller/auth_controller");
const passport = require('../middleware/passport')

// router.get('/:id', UserController.authMiddleware, UserController.getUser)

router.post("/login", UserController.loginAuth);
router.post("/register", UserController.getUser);

router.post('/checkManager', UserController.confirmManager)
router.post("/sendmail", UserController.sendEmail);
router.post('/notiManager', UserController.notiMan)

module.exports = router;
