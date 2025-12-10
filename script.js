const WINNING_SCORE = 100;
const audio = new Audio('computer-mouse-click-352734.mp3');

function start() {
    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
    document.getElementById("restart").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("p1sc").innerText = 0;
    document.getElementById("p2sc").innerText = 0;
    document.getElementById("p1dice").src="./diceimage/dice6.jpg";
    document.getElementById("p2dice").src="./diceimage/dice6.jpg";
}

function restart() {
    window.location.reload();
}

function p1play() {
    audio.play();
    const diceImg = document.getElementById("p1dice");
    const btn1 = document.getElementById("roll1");
    const btn2 = document.getElementById("roll2");

    btn1.disabled = true;
    diceImg.classList.add("spinning");

    setTimeout(() => {
        diceImg.classList.remove("spinning");
        let Score = Number(document.getElementById("p1sc").innerText);
        const DF = Math.floor(Math.random() * 6) + 1;
        diceImg.src = `./diceimage/dice${DF}.jpg`;
        Score = Score + DF;
        document.getElementById("p1sc").innerText = Score;

        if (Score >= WINNING_SCORE) {
            alert("Player 1 Wins the game!");
            return;
        }
        btn2.disabled = false;
    }, 500);
}

function p2play() {
    audio.play();
    const diceImg = document.getElementById("p2dice");
    const btn1 = document.getElementById("roll1");
    const btn2 = document.getElementById("roll2");

    btn2.disabled = true;
    diceImg.classList.add("spinning");

    setTimeout(() => {
        diceImg.classList.remove("spinning");
        let Score = Number(document.getElementById("p2sc").innerText);
        const DF = Math.floor(Math.random() * 6) + 1;
        diceImg.src = `./diceimage/dice${DF}.jpg`;
        Score = Score + DF;
        document.getElementById("p2sc").innerText = Score;

        if (Score >= WINNING_SCORE) {
            alert("Player 2 Wins the game!");
            return;
        }
        btn1.disabled = false;
    }, 500);
}