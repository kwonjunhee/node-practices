const express = require('express');

const router = express.Router();

router.route('/01').get(function(req, res) {
    res.render('hello/01', );
})

router.route('/02').get(function(req, res) {
    const data = {
        no: req.query.no ||  '', /*null이 될 가능성*/
        email: req.query.email ||  ''
    };
    
    res.render('hello/02', data);
})
module.exports = router;