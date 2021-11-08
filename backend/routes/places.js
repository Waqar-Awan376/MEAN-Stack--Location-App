const express = require('express');
const router = express.Router();
const placesController = require('../controllers/placesController');

router.post('/postPlace', placesController.postPlace);
router.get('/getPlaces', placesController.getPlaces);
router.get('/deletePlace/:id', placesController.deletePlace);
router.post('/updatePlace/:id', placesController.updatePlace);

module.exports = router;