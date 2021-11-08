const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Place {
    constructor(name, phoneNumber, street, city, state, zip, imageUrl, id) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zip;
        this.imageUrl = imageUrl;
        this._id = id ? new mongodb.ObjectId(id) : null;
    }

    save() {
        const db = getDb();
        if (this._id) {
            return db.collection('places').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this }).then((result) => {
                console.log(result);
            }).catch(err => console.log(err));
        }
        else {
            return db.collection('places').insertOne(this).then((result) => {
                console.log(result);
            }).catch(err => console.log(err));
        }
    }
    static fetchAll() {
        const db = getDb();
        return db.collection('places').find().toArray().then(result => {
            return result;
        }).catch(err => console.log(err));
    }
    static deleteById(placeId) {
        const db = getDb();
        return db.collection('places').deleteOne({ _id: new mongodb.ObjectId(placeId) }).then(result => {
            console.log("Deleted");
        }).catch(err => console.log(err));
    }
}

module.exports = Place;