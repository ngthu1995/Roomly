const express = require('express')
const router = express.Router();
const UserController = require('../controller/auth_controller')
const PaymentController = require('../controller/payment_controller')

router.post('/pay', UserController.authMiddleware, PaymentController.charge)