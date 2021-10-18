const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database').mongoConnect;
const multer = require('multer');
const path = require('path');


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

// ~~~~~~~ ROUTES ~~~~~~~//
const placesRoute = require('./routes/places');
const restaurantsRoute = require('./routes/restaurants');
// ~~~~~~~~~~~~~~~~~~~~~//

// ~~~~~~~ FOLLOWING MIDDLEWARES WILL RUN ON EVERY REQUEST ~~~~~~~//

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

app.use('/places', placesRoute);
app.use('/restaurants', restaurantsRoute);


app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

mongoConnect(() => {
    app.listen(3000);
});

