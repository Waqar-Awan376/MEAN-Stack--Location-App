const mongodb = require('mongodb');
const Restaurant = require('../models/restaurant');



exports.postRestaurant = (req, res, next) => {
    let imageurl = req.file.path;
    const newRestaurant = new Restaurant(req.body.name, req.body.phoneNumber, req.body.street, req.body.city, req.body.state, imageurl);
    newRestaurant.save().then(result => {
        res.status(200).json({
            result: "New Restaurant has been added"
        });
    }).catch(err => console.log(err));
}

exports.getRestaurants = (req, res, next) => {
    Restaurant.fetchAll().then((restaurants) => {
        res.status(200).json({
            status: true,
            result: "Successfully got full list of restaurants",
            allRestaurants: restaurants
        });
    }).catch(err => {
        console.log(err);
    });
}