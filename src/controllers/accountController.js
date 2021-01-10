var express = require('express');
var router = express.Router();

//RESET API STATE MEANS RESET ACC ARRAY TO EMPTY
router.post('/reset', function (req, res) {
    res.send('RESET ALL ACCOUNTS');
})

router.get('/balance/:account_id', function (req, res) {
    // Access account_id via: req.params.account_id
    // or 404
    res.send(req.params);
})

router.post('/event', function (req, res) {
    res.send('');

})


module.exports = router;