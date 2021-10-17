const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    mongoClient.connect(
        ''
    ).then(client => {
        console.log('Connected');
        callback(client);
    }).catch(err => {
        console.log(err);
    })
};

module.exports = mongoConnect;