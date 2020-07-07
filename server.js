//dependencies
const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { response } = require('express');
const { request } = require('http');


//static web server
app.use(express.static(path.join(__dirname,'dist')));

//connection to MongoDB
mongoose.connect('mongodb://root:rootuser1' + 
'@ds137255.mlab.com:37255/invoicestorage', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (error) => {
    console.log('ERROR ' + error);
});

mongoose.connection.once('open', () => {
    console.log('Connection to MLab was successful');
});

//Configuring body-parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//REST API
app.use('/api/createinvoice', require('./routes/create.js'));
app.use('/api/readinvoice', require('./routes/read.js'));
app.use('/api/updateinvoice', require('./routes/update.js'));
app.use('/api/deleteinvoice', require('./routes/delete.js'));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname,'dist/invoice.html'));
});

//port
app.listen(5000, () => {
    console.log('Node Server Running at port 5000');
});