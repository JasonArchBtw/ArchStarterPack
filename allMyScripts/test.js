const prompt = require("prompt-sync")();


//var consoles = 5;

//while (true) {
    //let answer = prompt("what consoles: ");
    //if (answer == consoles) {
       // console.log('correct');
      //  break;
   // } else {
   //     console.log('incorect');
  //      console.log('try again:');
  //      continue;
   // }
//}


level = 1;
health = 100;
round = 0;

function game() {
   while (true) {
      var play = prompt('What would you like to do: ')
      if (play !== 'level up' || play !== 'recover') {
         console.log('try again:')
         play = prompt('What would you like to do: ')         
      } 
      

      if (play == 'level up') {
         levelUp()
      } else if (play == 'recover') {
         recoverr()
         
      }
      break;
   }
}
game()
