//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.post('/', (request, response) => {
    const input = request.body;

    const newInvoice = new invoiceModel({
        sellerName: input.sellerName,
        sellerAddress: input.sellerAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.terms,
        invoiceDescription: input.invoiceDescription
    });

    //save information inside database
    newInvoice.save((err, doc) => {
        if(err){
            //Something went wrong
            console.log('ERROR ' + err);
            response.status(500).json({
                message: 'Problem when saving invoice'
            });
        }else{
            //Everything is ok
            console.log('Invoice was successfully saved')
            response.status(200).json({
                message: 'Invoice successfully created'
            });
        }
    });
});

//exporting the contents of this file
module.exports = router;