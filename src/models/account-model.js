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

actionFromEventType = (obj) => {
    if(obj.type === "deposit"){
        let isDeposit = accounts.findIndex(val => val.id === obj.destination);
        if(isDeposit === -1){
            createAccount(obj);
        }else{
            depositInExistentAccount(obj)
        }
    }
}

module.exports = {actionFromEventType ,getAccountBalance, createAccount ,accounts ,resetAccounts};


