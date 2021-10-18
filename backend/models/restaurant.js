const getDb = require('../util/database').getDb;

class Restaurant {
    constructor(name, phoneNumber, street, city, state, imageUrl) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.street = street;
        this.city = city;
        this.state = state;
        this.imageUrl = imageUrl;
    }

    save() {
        const db = getDb();
        db.collection('restaurants').insertOne(this).then((result) => {
            console.log(result);
        }).catch(err => console.log(err));
    }
    static fetchAll() {
        const db = getDb();
        return db.collection('restaurants').find().toArray().then(result => {
            return result;
        }).catch(err => console.log(err));
    }
}

module.exports = Restaurant;