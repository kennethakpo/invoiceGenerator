//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.get('/all', (request, response) => {
    invoiceModel.find({},(err, result) => {
        if(err){
            console.log('ERROR ' + err);
            response.status(500).json({message: 'There was an error retrieving invoices'});
        }else{
            response.send(result);
            console.log('Invoices were successfully retrieved');
        }
    });
});

router.get('/:invoiceId', (request, response) => {
    invoiceModel.findOne({_id: request.params.invoiceId} , (err, result) => {
        if(err){
            console.log('ERROR ' + err);
            response.status(500).json({message: 'There was an error retrieving invoices'});
        }else{
            response.send(result);
            console.log('1 Invoice was successfully retrieved');
        }
    });
});

//exporting the contents of this file
module.exports = router;