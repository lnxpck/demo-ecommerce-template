var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.redirect('index');
});

router.get('/index', function(req, res, next) {
    res.render('backend/index');
})

router.get('/ajout-edit', function(req, res, next) {
    res.render('backend/ajout-edit');
});

router.get('/factures', function(req, res, next) {
    res.render('backend/factures');
});

router.get('', function(req, res, next) {
    res.render('facture/facturePDF');
});

module.exports = router;