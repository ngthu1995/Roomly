const express = require("express");
const router = express.Router();
const ImageController = require("../controller/image-controller");

router.post("", ImageController.post);

module.exports = router;
