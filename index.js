const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


// App
const app = express();

// Database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));


// Middlewares
app.use(express.json());
app.use(cors());


// Server listening
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Welcome to the mern auth tutorial! Server is running on ${port}`)
});