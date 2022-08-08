const express = require('express')
const router = express.Router()
const {getAllCustomers, createCustomer, login} = require('../controllers/customers')

router.route('/').get(getAllCustomers).post(createCustomer)
router.route('/login').post(login)

module.exports = router

