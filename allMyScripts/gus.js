const prompt = require('prompt-sync')();

let numberMoney;
let money = 2;
numberMoney = parseFloat(money);
let guesNumber;

function guesRandomNumber() {
    while (true) {
        let randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log(randomNumber);

        guesNumber = prompt("Pick a number between 1-3: ");
        while (isNaN(guesNumber) || guesNumber < 1 || guesNumber > 3)  {
            guesNumber = prompt("Try again");
        }
        if (guesNumber == randomNumber) {
            prompt("You win");
            numberMoney = numberMoney * 2;
            console.log(numberMoney, "$"); 
        }
        else {
            prompt("You lost");
            numberMoney = 2;
        }
    
    
        
    }
}
guesRandomNumber();