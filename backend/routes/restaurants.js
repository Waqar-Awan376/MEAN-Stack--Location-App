const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurantsController');

router.post('/postRestaurant', restaurantsController.postRestaurant);
router.get('/getRestaurants', restaurantsController.getRestaurants);
router.get('/deleteRestaurant/:id', restaurantsController.deleteRestaurant);
router.post('/updateRestaurant/:id', restaurantsController.updateRestaurant);

module.exports = router;