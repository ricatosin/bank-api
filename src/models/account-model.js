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
    if(accountToGetBalance === undefined ){
        throw new Error('No account found to get balance !');
    }else {
        console.log(accountToGetBalance);
        return accountToGetBalance.balance;
    }
}

depositInExistentAccount = (obj) => {

    let accToDeposit = accounts.findIndex(acc => acc.id === obj.destination);
    console.log(accToDeposit);
    accounts[accToDeposit].balance += obj.amount;
    console.log(accounts);
    return JSON.stringify({"destination": {"id":obj.destination, "balance":accounts[accToDeposit].balance}});

}

createAccount = (obj) => {
    let acc = new account();
    acc.id = obj.destination;
    acc.balance = obj.amount;
    console.log(acc.id);
    console.log(acc.balance);
    accounts.push(acc);
    return JSON.stringify({"destination": {"id":obj.destination, "balance":acc.balance}});
    
}

transferFromAccount = (obj) => {
    console.log("Retira grana da conta");
    withdrawfromAccount(obj);
    console.log("Deposita grana na conta");
    depositInExistentAccount(obj);
}

withdrawfromAccount = (obj) => {
    console.log("Witdraw from", obj)
    let accToWithdraw = accounts.findIndex(acc => acc.id === obj.origin);
    if(accToWithdraw === -1){
        throw new Error('No account found to withdraw !');
    }else{
        console.log(accToWithdraw);
        accounts[accToWithdraw].balance -= obj.amount;
        console.log(accounts);
        console.log (JSON.stringify({"origin": {"id":obj.origin, "balance":accounts[accToWithdraw].balance}}));
        return JSON.stringify({"origin": {"id":obj.origin, "balance":accounts[accToWithdraw].balance}});
    }
}

actionFromEventType = (obj) => {
    if(obj.type === "deposit"){
        let isDeposit = accounts.findIndex(val => val.id === obj.destination);
        if(isDeposit === -1){
            return createAccount(obj);
        }else{
            return depositInExistentAccount(obj);
        }
    }
    //# Withdraw from existing account
    //POST /event {"type":"withdraw", "origin":"100", "amount":5}
    if(obj.type === "withdraw"){
        let accountExists = accounts.findIndex(val => val.id === obj.origin);
        if(accountExists === -1){
            return console.error("ACCOUNT NO EXISTS");
        }else{
           return withdrawfromAccount(obj);
        }
    }
    //# Transfer from existing account
    //POST /event {"type":"transfer", "origin":"100", "amount":15, "destination":"300"}
    //201 {"origin": {"id":"100", "balance":0}, "destination": {"id":"300", "balance":15}}
    if(obj.type === "transfer"){
        console.log("Transfer");
        transferFromAccount(obj);
    }
}

module.exports = {transferFromAccount, withdrawfromAccount, actionFromEventType ,getAccountBalance, createAccount ,accounts ,resetAccounts};


