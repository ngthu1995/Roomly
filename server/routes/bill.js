const express = require('express')
const router = express.Router();
const { authenticateUser, authenticateRole } = require('../middleware/passport')
const ManageController = require('../controller/bill')
router.post('', ManageController.create)
router.get('', ManageController.get)

module.exports = router;