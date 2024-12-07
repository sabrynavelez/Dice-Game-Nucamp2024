function rollDice () {
    let goldCoins = 0 //This keeps track of how many gold coins the player has won

    for (let i = 0; i < 10; i++) { //Notice how its semi colons NOT commas
        const roll = Math.floor(Math.random() * 6) +1 //Multiplying by 6 gives me a value from 0-6. Math.floor makes sure they are whole numbers (no decimals) and adding 1 it shifts the range from 0-5 to 1-6.

        alert ("You rolled a " + roll);
    
        if (roll === 1) {
            alert("Game Over! No more rolls! Total coins: " + goldCoins);
            break;  
        } else if (roll === 4 && goldCoins > 0) {
            goldCoins -= 1;  
            alert("BOOOO!!! You rolled a 4... You lose one gold coin! Total coins: " + goldCoins);
        } else if (roll < 5) {
            alert("Continue! Roll again! Total coins: " + goldCoins);
        } else if (roll === 5) {
            alert("Congrats!!! You win 5 GOLD COINS! Total coins: " + goldCoins);
            goldCoins += 5;
        } else if (roll === 6) {
            alert("Congrats!!! You win 6 GOLD COINS! Total coins: " + goldCoins);
            goldCoins += 6;
        }
    }
        

    alert("You have won " + goldCoins + " gold coin!!!");
}
