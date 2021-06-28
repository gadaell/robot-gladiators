var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 50;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

// fight function (now with parameter for enemy's name)
var fight = function (enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  while (playerHealth > 0 && enemyHealth > 0) {
    // Alert players that they are starting the round. Fight/Skip Battle Onption
    var promptFight = window.prompt(
      "Would you like to Fight or Skip this battle? Enter 'Fight' or 'Skip' to choose."
    );
    // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log(playerName + " money went down to " + playerMoney);
        break;
      }
    }
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "Fight") {
      // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
      playerHealth = playerHealth - enemyAttack;
      // Log a resulting message to the console so we know that it worked.
      console.log(
        enemyName +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died ");
        break;
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
      // reset enemyHealth before starting new fight
      enemyHealth = 50;
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
      // call fight function with enemy-robot
      fight(pickedEnemyName);
      // if player isn't alive, stop the game
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  // after the loops ends, player is either out of health or enemies to fight
  endGame();
};
//function to end the entire game
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");
  //if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score");
  } else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiator! Come back soon!");
  }
};
// start the game when the page loads
startGame();
