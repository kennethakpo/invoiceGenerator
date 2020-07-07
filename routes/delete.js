//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.delete('/:invoiceId', (request, response) => {
    invoiceModel.deleteOne({_id: request.params.invoiceId}, (err) => {
        if(err){
            console.log('ERROR ' + err);
        }else{
            console.log('invoice successfully removed from MongoDB ');
        }
    });
})

//exporting the contents of this file
module.exports = router;