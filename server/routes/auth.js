const express = require("express");
const router = express.Router();
const UserController = require("../controller/auth_controller");

router.get('/:id', UserController.authMiddleware, UserController.getUser)

router.post("/login", UserController.auth);
router.post("/register", UserController.register);

module.exports = router;
