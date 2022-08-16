const express = require('express');
const dotenv = require('dotenv');

const bootcamps = require('./router/bootcamps');

dotenv.config({path: './config/config.env' });

const app = express();


app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

app.listen(PORT, 
    console.log(`server on ${PORT}`)
    );