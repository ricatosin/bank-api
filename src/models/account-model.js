let accounts = [];

function account(id, balance){

    this.id = id;
    this.balance = balance;

}

function resetAccounts (obj) {
    obj = [];
}

getAccountBalance = (acc_id) => {
    let accountToGetBalance = accounts.find(acc => acc.id === acc_id);
    if(accountToGetBalance === undefined ){
        throw new Error('No account found to get balance !');
    }else {
        return accountToGetBalance.balance;
    }
}

depositInTransfer = (obj) => {
    let accToDepositInTransfer = accounts.findIndex(acc => acc.id === obj.destination);
    if(accToDepositInTransfer === -1){
        x = {
            destination: obj.destination,
            amount: obj.amount
        }
        createAccount(x);
        accToDepositInTransfer = accounts.findIndex(acc => acc.id === obj.destination);
    }
    return accounts[accToDepositInTransfer];
}


depositInExistentAccount = (obj) => {

    let accToDeposit = accounts.findIndex(acc => acc.id === obj.destination);
    accounts[accToDeposit].balance += obj.amount;
    return JSON.stringify({"destination": {"id":obj.destination, "balance":accounts[accToDeposit].balance}});

}

createAccount = (obj) => {
    let acc = new account();
    acc.id = obj.destination;
    acc.balance = obj.amount;
    accounts.push(acc);
    return JSON.stringify({"destination": {"id":obj.destination, "balance":acc.balance}});
    
}

transferFromAccount = (obj) => {
    let originAcc = JSON.parse(withdrawfromAccount(obj));
    let destinationAcc = depositInTransfer(obj);

    const retTransfer = {
        origin: originAcc.origin,
        destination:destinationAcc
    }
    return retTransfer;

}

withdrawfromAccount = (obj) => {
    let accToWithdraw = accounts.findIndex(acc => acc.id === obj.origin);
    if(accToWithdraw === -1){
        throw new Error('No account found to withdraw !');
    }else{
        accounts[accToWithdraw].balance -= obj.amount;
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
    if(obj.type === "withdraw"){
        let accountExists = accounts.findIndex(val => val.id === obj.origin);
        if(accountExists === -1){
            throw new Error('No account found to withdraw !');
        }else{
           return withdrawfromAccount(obj);
        }
    }
    if(obj.type === "transfer"){
        return transferFromAccount(obj);
    }
}

module.exports = {depositInTransfer,transferFromAccount, withdrawfromAccount, actionFromEventType ,getAccountBalance, createAccount ,accounts ,resetAccounts};


