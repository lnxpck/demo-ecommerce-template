/**
 * Created by fr20281 on 27/01/2017.
 */
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

// use res.render to load up an ejs view file
app.get('/', function(req, res) {
    res.redirect('/index');
});

app.get('/index', function(req, res) {
   res.render('frontend/index');
});

app.get('/texte', function(req, res) {
    res.render('frontend/texte');
});

app.get('/connexion', function(req, res) {
    res.render('frontend/connexion');
});

app.get('/adresses', function(req, res) {
    res.render('frontend/adresses');
});

app.get('/factures', function(req, res) {
    res.render('frontend/factures');
});

app.get('/inscription', function(req, res) {
    res.render('frontend/inscription');
});

app.get('/livraison', function(req, res) {
    res.render('frontend/livraison');
});

app.get('/mon-compte', function(req, res) {
    res.render('frontend/mon-compte');
});

app.get('/mot-de-passe-perdu', function(req, res) {
    res.render('frontend/mot-de-passe-perdu');
});

app.get('/nouveau-mot-de-passe', function(req, res) {
    res.render('frontend/nouveau-mot-de-passe');
});

app.get('/panier', function(req, res) {
    res.render('frontend/panier');
});

app.get('/produit', function(req, res) {
    res.render('frontend/produit');
});

app.get('/validation', function(req, res) {
    res.render('frontend/validation');
});

app.get('/backend/index', function(req, res) {
    res.render('backend/index');
});

app.get('/backend/ajout-edit', function(req, res) {
    res.render('backend/ajout-edit');
});

app.get('/backend/factures', function(req, res) {
    res.render('backend/factures');
});

app.get('/facture', function(req, res) {
    res.render('facture/facturePDF');
});



app.listen(8080);