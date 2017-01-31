var express = require('express');
var router = express.Router();


router.get('/:facture_id', function(req, res, next) {
    res.render('facture/facturePDF');
});

module.exports = router;