const account = [];
account[0] = { a: 1 };

function resetAccounts (obj) {
    console.log(obj);
    console.log("RESETED");
    obj = [];
    console.log(obj);
}

function printAcc(obj){
    console.log(obj);
}

accountEvent = (obj) => {
    console.log(obj);
}


module.exports = { accountEvent ,account, resetAccounts, printAcc };


