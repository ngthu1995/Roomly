const express = require("express");
const router = express.Router();
const UserController = require("../controller/auth_controller");
const passport = require("../middleware/passport");

// router.get('/:id', UserController.authMiddleware, UserController.getUser)

router.post("/login", UserController.loginAuth);
router.post("/register", UserController.getUser);

<<<<<<< HEAD
router.get("/list", UserController.getUsers);

router.post("/checkManager", UserController.confirmManager);
=======
router.post('/checkManager', UserController.confirmManager);
router.get('/list', UserController.getUsers);

// router.post('/checkManager', UserController.confirmManager)
>>>>>>> 920d392e45420990d7e5f48d6086862b2b6a26eb
module.exports = router;
