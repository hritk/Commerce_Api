const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.status(200).json({sucess:true, msg: 'show bootcamps'}); 

});

router.get('/:id', (req, res) => {
    res.status(200).
    json({sucess:true, msg: `show bootcamp id ${req.params.id}`}); 

});

router.post('/', (req, res) => {
    res.status(200).
    json({sucess:true, msg: 'create bootcamps'}); 

});

router.put('/:id', (req, res) => {
    res.status(200).
    json({sucess:true, msg: `update  bootcamps id ${req.params.id}`}); 

});

router.delete('/:id', (req, res) => {
    res.status(200).
    json({sucess:true, msg: `delete id ${req.params.id}`}); 

});

module.exports = router;
