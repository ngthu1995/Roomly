const express = require("express");
const router = express.Router();
const UserController = require("../controller/auth_controller");
const passport = require('../middleware/passport')

// router.get('/:id', UserController.authMiddleware, UserController.getUser)

router.post("/login", UserController.loginAuth);
<<<<<<< HEAD
router.post("/register", UserController.register);
=======
router.post("/register", UserController.getUser);

router.post('/checkManager', UserController.confirmManager);
router.get('/list', UserController.getUsers);
>>>>>>> cdd393ce8eacf64d2703fd1e59910035393fe184

router.post('/checkManager', UserController.confirmManager)
module.exports = router;
