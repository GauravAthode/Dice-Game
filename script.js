const WINNING_SCORE = 100;

function start() {
    console.log("Game started");
    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
    document.getElementById("restart").disabled = false;
    document.getElementById("start").disabled = true;
    

    document.getElementById("p1sc").innerText = 0;
    document.getElementById("p2sc").innerText = 0;
}

function restart() {
    window.location.reload();
}


function p1play() {
    console.log("Player 1 Playing");
    let Score = Number(document.getElementById("p1sc").innerText);


    const DF = Math.floor(Math.random() * 6) + 1;

    switch(DF){
        case 1:{document.getElementById("p1dice").src="./diceimage/dice1.jpg"; break;}
        case 2:{document.getElementById("p1dice").src="./diceimage/dice2.jpg"; break;}
        case 3:{document.getElementById("p1dice").src="./diceimage/dice3.jpg"; break;}
        case 4:{document.getElementById("p1dice").src="./diceimage/dice4.jpg"; break;}
        case 5:{document.getElementById("p1dice").src="./diceimage/dice5.jpg"; break;}
        case 6:{document.getElementById("p1dice").src="./diceimage/dice6.jpg"; break;}
    }


    if (true) { 
        Score = Score + DF;
        document.getElementById("p1sc").innerText = Score;
    }
    

    if (Score >= WINNING_SCORE) {
        alert("Player 1 Wins the game!");
        document.getElementById("roll1").disabled = true;
        document.getElementById("roll2").disabled = true;
        return; 
    }

    
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
}


function p2play() {
    console.log("Player 2 Playing");
    let Score = Number(document.getElementById("p2sc").innerText);

    const DF = Math.floor(Math.random() * 6) + 1;

    switch(DF){
        case 1:{document.getElementById("p2dice").src="./diceimage/dice1.jpg"; break;}
        case 2:{document.getElementById("p2dice").src="./diceimage/dice2.jpg"; break;}
        case 3:{document.getElementById("p2dice").src="./diceimage/dice3.jpg"; break;}
        case 4:{document.getElementById("p2dice").src="./diceimage/dice4.jpg"; break;}
        case 5:{document.getElementById("p2dice").src="./diceimage/dice5.jpg"; break;}
        case 6:{document.getElementById("p2dice").src="./diceimage/dice6.jpg"; break;}
    }

    if (true) {
        Score = Score + DF;
        document.getElementById("p2sc").innerText = Score;
    }

    if (Score >= WINNING_SCORE) {
        alert("Player 2 Wins the game!");
        document.getElementById("roll1").disabled = true;
        document.getElementById("roll2").disabled = true;
        return;
    }


    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
}