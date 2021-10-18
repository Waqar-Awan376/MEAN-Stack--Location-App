const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurantsController');

router.post('/postRestaurant', restaurantsController.postRestaurant);
router.get('/getRestaurants', restaurantsController.getRestaurants);

module.exports = router;