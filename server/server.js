const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname, '../dist')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
