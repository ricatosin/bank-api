const router = require("express").Router();
const { json } = require("body-parser");
const account = require("../models/account-model");

exports.account_test = function(req, res) {
    let teste = JSON.stringify(account.accounts);
    res.send(teste);
};

exports.account_reset = function(req, res) {
    account.resetAccounts(account.resetAccounts(account.accounts));
    res.type('application/json');
    res.status(200).send("OK");
};


// Display specif account balance.
exports.account_balance = async (req, res, next) => {
    try {
        console.log(req.query.id);
        let parameter = await account.getAccountBalance(req.query.id);
        res.type('application/json');
        res.status(200).send(`${parameter}`);

    }catch(error){
        res.status(404).send("0");
        console.log("Nothing found");
    }
};

exports.account_event = async (req, res, next) => {
    try {
        let valueToReturn = await account.actionFromEventType(req.body);
        res.type('application/json')
        res.status(201).send(valueToReturn);

    }catch(err){
        console.log(err);
        res.sendStatus(404);
        next();
    }
};