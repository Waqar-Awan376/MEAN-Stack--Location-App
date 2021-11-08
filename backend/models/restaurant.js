const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Restaurant {
    constructor(name, phoneNumber, street, city, state, imageUrl, id) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.street = street;
        this.city = city;
        this.state = state;
        this.imageUrl = imageUrl;
        this._id = id ? new mongodb.ObjectId(id) : null;
    }

    save() {
        const db = getDb();
        if (this._id) {
            return db.collection('restaurants').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this }).then((result) => {
                console.log(result);
            }).catch(err => console.log(err));
        }
        else {
            return db.collection('restaurants').insertOne(this).then((result) => {
                console.log(result);
            }).catch(err => console.log(err));
        }
    }
    static fetchAll() {
        const db = getDb();
        return db.collection('restaurants').find().toArray().then(result => {
            return result;
        }).catch(err => console.log(err));
    }
    static deleteById(resId) {
        const db = getDb();
        return db.collection('restaurants').deleteOne({ _id: new mongodb.ObjectId(resId) }).then(result => {
            console.log("Deleted");
        }).catch(err => console.log(err));
    }
}

module.exports = Restaurant;