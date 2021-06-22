var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// create function
var fight = function() {
      // Alert players that they are starting the round
        window.alert("Welcome to Robot Gladiators!");
      // Fight/Skip Battle Option
        var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'Fight' or 'Skip' to choose.");
      // if player choses to fight, then fight
        if( promptFight === "fight" || promptFight === "Fight") { 
      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack
      // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
     // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack
     // Log a resulting message to the console so we know that it worked.
       console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
     // check enemy's health  
       if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
       // check player's health
       if (playerHealth <=0) {
           window.alert(playerName + " has died ");
       }
       else {
           window.alert(playerName + " still has " + playerHealth + " health left.");
       }
         // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
            // if yes (true), leave fight
            if (confirmSkip) {
              window.alert(playerName + " has decided to skip this fight. Goodbye!");
              // subtract money from playerMoney for skipping
              playerMoney = playerMoney - 2;
              console.log(playerName + " money went down to " + playerMoney);

            }
            // if no (false), ask question again by running fight() again
            else {
              fight();
            }
          }
        }
// execute function
fight();
        