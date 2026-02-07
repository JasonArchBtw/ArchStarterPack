const prompt = require('prompt-sync')();

let money;
function showMoneyAmount() {
    money = prompt("Select money amount: ");
    while (isNaN(money)) {
        money = prompt("Try again: ");
    }
    while (money <= 0) {
        money = prompt("Try again: ");
    }
console.log(money, "$");

}
showMoneyAmount();


let tran;
function transa() {
    while (money > 0) {
        tran = prompt("what would you like to do with your money: enter 1 or 2: ");

    if (tran == 1) {
        tran = prompt("1How much: ");
        let numberTran = parseFloat(tran);
        let numberMoney = parseFloat(money);
        money = numberMoney - numberTran;
        console.log("You have left: ", money, "$");
    } 
    if (tran == 2) {
        tran = prompt("2How much: ");
        let numberTran = parseFloat(tran);
        let numberMoney = parseFloat(money);
        money = numberMoney + numberTran;
        console.log("You have left: ", money, "$");
    }
    }
}
transa();



