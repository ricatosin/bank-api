const router = require("express").Router();
const account = require("../models/account-model");


exports.account_reset = function(req, res) {
    account.resetAccounts(account.resetAccounts(account.accounts));
    res.sendStatus(200);
};

exports.account_dummy = function(req, res) {
    console.log("Entrei");
    account.dummyAdd(req.body);
    //res.sendStatus(200);
    console.log("Sai");
    res.sendStatus(200);
};

// Display specif account balance.
exports.account_balance = function(req, res) {
    res.send('NOT IMPLEMENTED:  list');
};

exports.account_event = function(req, res) {
    res.send('NOT IMPLEMENTED:  create POST');
};