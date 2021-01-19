const accounts = [];
//accounts[0] = { a: 1 };

function resetAccounts (obj) {
    console.log(obj);
    console.log("RESETED");
    obj = [];
    console.log(obj);
}

function printAcc(obj){
    console.log(obj);
}

dummyAdd = (obj) => {
    accounts.push(obj);
}

accountEvent = (obj) => {
    console.log(obj);
}

getAccountBalance = (obj) => {

}

findAccountById = (obj, id) => {

}

createAccount = (obj) => {
    accounts.push(obj);
}

getEventType = (obj) => {

}



module.exports = {dummyAdd, createAccount, accountEvent ,accounts, resetAccounts, printAcc };


