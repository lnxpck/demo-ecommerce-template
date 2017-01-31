/**
 * Created by plesaint on 27/01/2017.
 */
var express = require('express');
var app = express();

var backend = require('./routes/backend.js');
var facture = require('./routes/facture.js');
var root = require('./routes/root.js');

// set the view engine to ejs
app.set('view engine', 'ejs');

// set static folder
app.use(express.static('public'));

// set routes
app.use('/backend', backend);
app.use('/facture', facture);
app.use('/', root);

app.listen(8080);
console.log('Server running on port 8080...');
console.log('Front-End : http://localhost:8080/index');
console.log('Back-End : http://localhost:8080/admin/index');