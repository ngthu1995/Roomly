const express = require("express");
const router = express.Router();
const UserController = require("../controller/auth_controller");
const passport = require("../middleware/passport");

// router.get('/:id', UserController.authMiddleware, UserController.getUser)

router.post("/login", UserController.loginAuth);
router.post("/register", UserController.register);

router.post("/checkManager", UserController.confirmManager);
router.get("/list", UserController.getUsers);

// router.post('/checkManager', UserController.confirmManager)
module.exports = router;
