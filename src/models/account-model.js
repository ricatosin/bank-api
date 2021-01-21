const { json } = require("body-parser");

const accounts = [];

function account(id, balance){

    this.id = id;
    this.balance = balance;

}


function resetAccounts (obj) {
    console.log(obj);
    console.log("RESETED");
    obj = [];
    console.log(obj);
}

getAccountBalance = (acc_id) => {
    console.log(acc_id);
    let accountToGetBalance = accounts.find(acc => acc.id === acc_id);
    console.log(accountToGetBalance);
    return accountToGetBalance.balance;
}

depositInExistentAccount = (obj) => {

    let accToDeposit = accounts.findIndex(acc => acc.id === obj.destination);
    console.log(accToDeposit);
    accounts[accToDeposit].balance += obj.amount;
    console.log(accounts);

}

createAccount = (obj) => {
    let acc = new account();
    acc.id = obj.destination;
    acc.balance = obj.amount;
    console.log(acc.id);
    console.log(acc.balance);
    accounts.push(acc);
}

withdrawfromAccount = (obj) => {
    console.log("Witdraw from", obj)
    let accToWithdraw = accounts.findIndex(acc => acc.id === obj.origin);
    console.log(accToWithdraw);
    accounts[accToWithdraw].balance -= obj.amount;
    console.log(accounts);
}

actionFromEventType = (obj) => {
    if(obj.type === "deposit"){
        let isDeposit = accounts.findIndex(val => val.id === obj.destination);
        if(isDeposit === -1){
            createAccount(obj);
        }else{
            depositInExistentAccount(obj)
        }
    }
    //# Withdraw from existing account
    //POST /event {"type":"withdraw", "origin":"100", "amount":5}
    if(obj.type === "withdraw"){
        let accountExists = accounts.findIndex(val => val.id === obj.origin);
        if(accountExists === -1){
            return console.error("ACCOUNT NO EXISTS");
        }else{
            withdrawfromAccount(obj);
        }
    }
}

module.exports = {withdrawfromAccount, actionFromEventType ,getAccountBalance, createAccount ,accounts ,resetAccounts};


