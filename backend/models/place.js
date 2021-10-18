const getDb = require('../util/database').getDb;

class Place {
    constructor(name, phoneNumber, street, city, state, zip, imageUrl) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zip;
        this.imageUrl = imageUrl;
    }

    save() {
        const db = getDb();
        return db.collection('places').insertOne(this).then((result) => {
            console.log(result);
        }).catch(err => console.log(err));
    }
    static fetchAll() {
        const db = getDb();
        return db.collection('places').find().toArray().then(result => {
            return result;
        }).catch(err => console.log(err));
    }
}

module.exports = Place;