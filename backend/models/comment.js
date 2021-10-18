const getDb = require('../util/database').getDb;

class Comment {
    constructor(id, comment) {
        this.id = id;
        this.comment = comment;
    }

    save() {
        const db = getDb();
        return db.collection('comments').insertOne(this).then((result) => {
            console.log(result);
        }).catch(err => console.log(err));
    }
    static fetch(recId) {
        const db = getDb();
        return db.collection('comments').find({ id: recId }).toArray().then(result => {
            return result;
        }).catch(err => console.log(err));
    }
}

module.exports = Comment;