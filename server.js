const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({sucess:true, msg: 'show bootcamps'}); 

});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).
    json({sucess:true, msg: `get bootcamp id ${req.params.id}`}); 

});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).
    json({sucess:true, msg: 'create bootcamps'}); 

});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).
    json({sucess:true, msg: `update  bootcamps id ${req.params.id}`}); 

});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).
    json({sucess:true, msg: `delete id ${req.params.id}`}); 

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, 
    console.log(`server on ${PORT}`)
    );