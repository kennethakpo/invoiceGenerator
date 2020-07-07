//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.put('/:invoiceId', (request, response) => {
    const input = request.body;

    invoiceModel.updateOne(
        { _id: request.params.invoiceId}, 
        {
            sellerName: input.sellerName,
            sellerAddress: input.sellerAddress,
            customerName: input.customerName,
            customerAddress: input.customerAddress,
            items: input.items,
            finalPrice: input.finalPrice,
            terms: input.terms,
            invoiceDescription: input.invoiceDescription
        }, 
        (err, result) => {
        if(err){
            console.log('ERROR ' + err);
        }else{
            console.log('invoice successfully updated ');
        }
    });
})

//exporting the contents of this file
module.exports = router;