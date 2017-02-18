var express = require('express');
var logger = require('../utils/logger');

var router = express.Router();
router.use('/demo-test', function (req, res, next) {
    res.render('demo',{pageTitle:'Vertical centering with css'});
});

module.exports = router;
