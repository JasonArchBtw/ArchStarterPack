let MoneyBar = document.getElementById('moneyBar');
MoneyBar.value = 0;
console.log(MoneyBar.value);

let InputMoney = document.getElementById('inputMoney');
function transfer() {
    MoneyBar.value = parseFloat(MoneyBar.value) + parseFloat(InputMoney.value);
    console.log(InputMoney.value);
    console.log(MoneyBar.value);
    InputMoney.value = '';
}

var moneyTransfer = document.getElementById("mainMoneyTransfer");
var display = 0;
function openMoney() {
    if (display == 1) {
        moneyTransfer.style.display = "block";
        display = 0;
    } else {
        moneyTransfer.style.display = "none";
        display = 1;
    }
}


var number11 = document.getElementById("number1");
var number22 = document.getElementById("number2");
var number33 = document.getElementById("number3");
var amountBet = document.getElementById("betAmount");
function playGame() {
        number11.textContent = Math.floor(Math.random() * 3) + 1;
        number22.textContent = Math.floor(Math.random() * 3) + 1;
        number33.textContent = Math.floor(Math.random() * 3) + 1;
    
    if (parseFloat(amountBet.value) > parseFloat(MoneyBar.value)) {
        amountBet.value = 0;
    }

    if (number11.textContent == number22.textContent && number11.textContent == number33.textContent && number22.textContent == number33.textContent) {
        amountBet.value = parseFloat(amountBet.value) * 3;
        MoneyBar.value = parseFloat(MoneyBar.value) + parseFloat(amountBet.value);         
    } else if (number11.textContent == number22.textContent || number11.textContent == number33.textContent || number22.textContent == number11.textContent || number22.textContent == number33.textContent || number33.textContent == number11.textContent || number33.textContent == number22.textContent) {
        amountBet.value = parseFloat(amountBet.value) * 1.5;
        MoneyBar.value = parseFloat(MoneyBar.value) + parseFloat(amountBet.value);
    } else {
        MoneyBar.value = parseFloat(MoneyBar.value) - parseFloat(amountBet.value);    
    }
    
    
    if (MoneyBar.value < 0) {
        alert("add more money");
        MoneyBar.value = 0;
    }
}


