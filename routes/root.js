var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.redirect('index');
});


// use res.render to load up an ejs view file
router.get('/', function(req, res, next) {
    res.redirect('/index');
});

router.get('/index', function(req, res, next) {
    res.render('frontend/index');
});

router.get('/texte', function(req, res, next) {
    res.render('frontend/texte');
});

router.get('/connexion', function(req, res, next) {
    res.render('frontend/connexion');
});

router.get('/adresses', function(req, res, next) {
    res.render('frontend/adresses');
});

router.get('/factures', function(req, res, next) {
    res.render('frontend/factures');
});

router.get('/inscription', function(req, res, next) {
    res.render('frontend/inscription');
});

router.get('/livraison', function(req, res, next) {
    res.render('frontend/livraison');
});

router.get('/mon-compte', function(req, res, next) {
    res.render('frontend/mon-compte');
});

router.get('/mot-de-passe-perdu', function(req, res, next) {
    res.render('frontend/mot-de-passe-perdu');
});

router.get('/nouveau-mot-de-passe', function(req, res, next) {
    res.render('frontend/nouveau-mot-de-passe');
});

router.get('/panier', function(req, res, next) {
    res.render('frontend/panier');
});

router.get('/produit', function(req, res, next) {
    res.render('frontend/produit');
});

router.get('/validation', function(req, res, next) {
    res.render('frontend/validation');
});

module.exports = router;