const prompt = require('prompt-sync')();
//create main menu
//then a way to gain money
//add shop
//an a shop


let moneyAmaunt = 0;

const deposit = () => {
    while (true) {
      const depositAmount = prompt("Enter a deposit amount: ");
      const numberDepositAmount = parseFloat(depositAmount);
  
      if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
      } else {
        return numberDepositAmount;
      }
    }
  }
moneyAmaunt = deposit();


function mainMenu() {
while (true) {
    let menu = prompt("what do you want to do: ");
    if (menu == "casino") {
        if (moneyAmaunt < 5) {
            prompt("You are broke: ");
        }else {
            moneyAmaunt = moneyAmaunt - 5;
            guesRandomNumber();
        }    
    }
    if (menu == "show money"); {
    console.log(moneyAmaunt + "$");
    }
    if (menu == "shop") {
        shop();
    }
    if (menu == "owned") {
    owned();
    }
}
}



let shopMenu;
let ownedMenu;
let question;
shopMenu = ["BMW car1 = 50$", "BMW car2 = 50$", "BMW car3 = 50$"];
function shop() {
    console.log(shopMenu);
    while (true) {
    question = prompt("What would you like to buy: ");
    if (question == 1) {
        if (moneyAmaunt < 50) {
            prompt("Not enouth money: ");
        } else {
            moneyAmaunt = moneyAmaunt - 50;
            shopMenu.splice(0, 1);
            ownedMenu.push("BMW car1 = 50$");
        }
    }
    menu = prompt("Do you want to quit: ")
    if(menu == "yes") {
        break;
    }else if (menu == "no") {
        continue;
    }

}
}

ownedMenu = [];
function owned() {
    console.log(ownedMenu);
}





let numberMoney;
let money = 4;
numberMoney = parseFloat(money);
let guesNumber;

function guesRandomNumber() {
    while (true) {
        let randomNumber = Math.floor(Math.random() * 3 + 1);

        //console.log(randomNumber);

        guesNumber = prompt("Cost 5$, Pick a number between 1-3: ");
        while (isNaN(guesNumber) || guesNumber < 1 || guesNumber > 3)  {
            guesNumber = prompt("Try again");
        }
        if (guesNumber == randomNumber) {
            prompt("You win");
            numberMoney = numberMoney * 2;
            console.log(numberMoney, "$"); 
            //moneyAmaunt = moneyAmaunt + numberMoney;
        }
        else {
            prompt("You lost");
            numberMoney = 4;
        }
    menu = prompt("Do you want to quit: ")
    if(menu == "yes") {
        moneyAmaunt = moneyAmaunt + numberMoney;
        numberMoney = 4;
        break;
    }else if (menu == "no") {
        moneyAmaunt = moneyAmaunt - 5;
        continue;
    }

    }
}

mainMenu();


