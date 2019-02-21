const express = require('express')
const router = express.Router();
const { authenticateUser, authenticateRole } = require('../middleware/passport')
const ManageController = require('../controller/manager')
router.get('/', authenticateUser, authenticateRole(['admin']), ManageController.get)