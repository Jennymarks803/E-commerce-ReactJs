//CREATING ORDER//
const express = require('express');
const router = express.Router();

//OPTIONAL IF IT IS NOT COMING//
const {createOrder} = require('../controllers/orderController');

//TO USE POST METHOD TO GET ORDER DETAILS
router.route('/order').post(createOrder);

module.exports = router;
