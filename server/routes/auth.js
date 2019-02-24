const express = require("express");
const router = express.Router();
const UserController = require("../controller/auth_controller");
const passport = require("../middleware/passport");

// router.get('/:id', UserController.authMiddleware, UserController.getUser)

router.post("/login", UserController.loginAuth);
router.post("/register", UserController.getUser);

<<<<<<< HEAD
router.post('/checkManager', UserController.confirmManager)
router.post("/sendmail", UserController.sendEmail);
router.post('/notiManager', UserController.notiMan)
=======
router.post("/checkManager", UserController.confirmManager);
router.get("/list", UserController.getUsers);
>>>>>>> 1c487a8d0f7cc52a3a4c42d85c42dcd102e7edd7

// router.post('/checkManager', UserController.confirmManager)
module.exports = router;
