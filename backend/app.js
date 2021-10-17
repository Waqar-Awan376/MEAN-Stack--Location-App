const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database');
const multer = require('multer');


const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images");
    },
    filename: (req, file, cb) => {
        var d = new Date();
        var n = d.getTime();
        cb(null, n + '_' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};


mongoConnect((client) => {
    app.listen(3000);
})

