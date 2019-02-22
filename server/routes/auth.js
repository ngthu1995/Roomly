const express = require("express");
const router = express.Router();
const UserController = require("../controller/auth_controller");
const passport = require('../middleware/passport')

router.get('/:id', UserController.authMiddleware, UserController.getUser)

router.post("/login", UserController.auth);
router.post("/register", UserController.register);

router.post("/sendmail", UserController.sendEmail);


module.exports = router;
