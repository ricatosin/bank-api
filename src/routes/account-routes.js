const router = require("express").Router();
var account_controller = require('../controllers/account-controller');

//dummy post to add object to array to test if is working
router.post('/dummy', account_controller.account_dummy);
//Create Router as controller to test call to no persistent model !

router.get('/test', account_controller.account_reset);

//RESET ALL ACCOUNT STATES API STATE MEANS RESET ACC ARRAY TO EMPTY
router.post('/reset', account_controller.account_reset);

router.get('/balance/:account_id', function (req, res) {
    // Access account_id via: req.params.account_id
    // else or 404
    res.send(req.params);
})

//Strange way to handle request... but requested in the api spec
// Create account : Transfer from accounts : Withdraw from account : Deposit in account 
router.post('/event', account_controller.account_event);

module.exports = router;