rollDice();

function rollDice(){
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let string1 = "images/dice" + randomNumber1 + ".png";
    
    document.getElementById("img1").setAttribute("src", string1);

    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    let string2 = "images/dice" + randomNumber2 + ".png";
    
    document.getElementById("img2").setAttribute("src", string2);

    let result;
    if (randomNumber1 > randomNumber2){
        result = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2){
        result = "Player 2 Wins! 🚩";
    } else {
        result = "Draw!";
    }

    document.querySelector("h1").textContent=result;
}