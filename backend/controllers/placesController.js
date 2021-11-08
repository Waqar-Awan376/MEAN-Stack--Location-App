const mongodb = require('mongodb');
const Place = require('../models/place');



exports.postPlace = (req, res, next) => {
    let imageurl = req.file.path;
    const newPlace = new Place(req.body.name, req.body.phoneNumber, req.body.street, req.body.city, req.body.state, req.body.zipCode, imageurl);
    newPlace.save().then(result => {
        res.status(200).json({
            status: true,
            result: "New Place has been added"
        });
    }).catch(err => console.log(err));
}

exports.getPlaces = (req, res, next) => {
    Place.fetchAll().then((places) => {
        res.status(200).json({
            status: true,
            result: "Successfully got full list of Places",
            allPlaces: places
        });
    }).catch(err => {
        console.log(err);
    });
}
exports.deletePlace = (req, res, next) => {
    const placeId = req.params.id;
    Place.deleteById(placeId).then(() => {
        res.status(200).json({
            status: true,
            message: "Successfully deleted Museum"
        })
    }).catch(err => console.log(err));
}
exports.updatePlace = (req, res, next) => {
    const placeId = req.params.id;
    let imageurl = req.file.path;
    const newPlace = new Place(req.body.name, req.body.phoneNumber, req.body.street, req.body.city, req.body.state, req.body.zipCode, imageurl, placeId);
    newPlace.save().then((result) => {
        res.status(200).json({
            status: true,
            message: "Successfully updated Place"
        })
    }).catch(err => console.log(err));
}