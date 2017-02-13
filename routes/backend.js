var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.redirect('index');
    }).get('/index', function(req, res, next) {
    res.render('backend/index');
    }).get('/ajout-edit', function(req, res, next) {
    res.render('backend/ajout-edit');
    }).get('/factures', function(req, res, next) {
    res.render('backend/factures');
    }).get('', function(req, res, next) {
    res.render('facture/facturePDF');
});

module.exports = router;