const router = require("express").Router();
const { json } = require("body-parser");
const account = require("../models/account-model");

exports.account_test = function(req, res) {
    let teste = JSON.stringify(account.accounts);
    res.send(teste);
};

exports.account_reset = async function(req, res) {
    try {
        res.type('application/json');
        await account.resetAccounts(account.resetAccounts(account.accounts));
        res.status(200).send("OK");
        
    }catch(error){
        res.status(404).send("0");
    }
};

// Display specif account balance.
exports.account_balance = async (req, res, next) => {
    try {
        let parameter = await account.getAccountBalance(req.query.account_id);
        res.type('application/json');
        res.status(200).send(`${parameter}`);

    }catch(error){
        res.status(404).send("0");
    }
};

exports.account_event = async (req, res, next) => {
    try {
        const valueToReturn = await account.actionFromEventType(req.body);
        res.type('application/json')
        res.status(201).send(valueToReturn);
        next();

    }catch(err){
        res.status(404).send("0");
        next();
    }
};