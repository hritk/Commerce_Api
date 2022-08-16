const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db'); 
const colors = require('colors');



dotenv.config({path: './config/config.env' });


connectDB();


const bootcamps = require('./router/bootcamps');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, 
    console.log(`server in mode ${process.env.NODE_ENV} on ${PORT}`.yellow.bold)
    );

    process.on('unhandledRejection', (err,promise) => {
      
        console.log(`Error : ${err.message}`.red); 

        server.close( () => process.exit(1));

    });