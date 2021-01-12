const router = require("express").Router();
const acc = require("../model/account");


//Create Router as controller to test call to no persistent model !

router.get('/test', (req,res) => {
    acc.resetAccounts(acc.account);
    res.json("test");
})

//RESET API STATE MEANS RESET ACC ARRAY TO EMPTY
router.post('/reset', function (req, res) {
    res.send('RESET ALL ACCOUNTS');
})


router.get('/balance/:account_id', function (req, res) {
    // Access account_id via: req.params.account_id
    // or 404
    res.send(req.params);
})


// Create account : Transfer from accounts : Withdraw from account : Deposit in account 
router.post('/event',  (req, res, next) => {
    acc.accountEvent(req.body);
    res.send(req.body);
})


module.exports = router;