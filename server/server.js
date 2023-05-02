const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { db } = require('./db/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.use(express.static(path.join(__dirname, '../dist')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

/**
 * The extended option allows to choose between parsing the URL-encoded data with the querystring library (when extended is false) or the qs library (when extended is true).
 * The qs library can handle more complex nested objects than the querystring library.
 *
 * So when you set extended to false, the urlencoded middleware will use the built-in querystring library to parse the incoming data, which can limit
 * the size of the parsed data and may not be able to handle complex nested objects. If you need to parse complex nested objects, it's better to set extended to true.
 */

console.log('Hello');

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;

const init = async () => {
    try {
        await db.sync({ force: true }); //typically we don't want to do force true in production mode.
        // await User.create({ firstName: 'John' });

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });

        console.log('connected');
    } catch (error) {
        console.log(error);
    }
};

init();
