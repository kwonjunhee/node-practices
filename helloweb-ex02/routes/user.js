const express = require('express');

const router = express.Router();


router.route('').get(function(req, res) {
    res.render('user/info', {
        no: req.query.no || 0
    });
});
// join과 :no는 순서 조심할 것
router.route('/join').get(function(req, res) {
    res.render('user/join');
});

router.route('/:no').get(function(req, res) {
    res.render('user/info', {
        no: req.params.no || 0
    });
});
router.route('/join').post(function(req, res) {
    console.log(req.body);
    res.redirect("/");
});
router.route('/api').get(function(req, res) {
    vo = {
        no: 10,
        name: 'july',
        email:'july@na.com',
        gender: 'female'
    };
    res.writeHead(200, {
        'Content-Type':'application/json'
    });
    res.end(JSON.stringify);
});
module.exports = router;