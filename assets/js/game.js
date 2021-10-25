
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {

    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }

    while(enemyHealth > 0 && playerHealth > 0) {
        

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //Asks the player if they want to fight or skip. If the player wants to fight it runs the code to fight.
        if (promptFight == "Fight" || promptFight =="fight") {

            enemyHealth -= playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            playerHealth -= enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        else if (promptFight == "SKIP" || promptFight == "skip") {

            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney -= 10;
                break;
            }
            else {
                continue;
            }
        }
        else {
            window.alert("You need to choos a valid option. Try again!");
        }
    }
};



for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName)
}
