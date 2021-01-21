const router = require("express").Router();
const { json } = require("body-parser");
const account = require("../models/account-model");

exports.account_test = function(req, res) {
    let teste = JSON.stringify(account.accounts);
    res.send(teste);
};

exports.account_reset = function(req, res) {
    account.resetAccounts(account.resetAccounts(account.accounts));
    res.sendStatus(200);
};


// Display specif account balance.
exports.account_balance = async (req, res, next) => {
    try {
        console.log(req.query.id);
        let parameter = account.getAccountBalance(req.query.id);
        res.send(200);

    }catch(err){
        console.log(err);
    }
};

exports.account_event = async (req, res, next) => {
    try {
        await account.actionFromEventType(req.body);
        res.sendStatus(200);

    }catch(err){
        console.log(err);
        next();
    }
};