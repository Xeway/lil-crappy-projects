let numberOfTurn = 0;
let winOrNot = false;
let possibilitiesToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let table = ["", "", "", "", "", "", "", "", ""];
let currentPlayerSpan = document.querySelector('.current-player');
let winnerStrat = [];

function checkWinner(winner) {
    possibilitiesToWin.forEach(function(possibilityToWin) {
        if(table[possibilityToWin[0]] !== "" && table[possibilityToWin[1]] !== "" && table[possibilityToWin[2]] !== "") {
            if(table[possibilityToWin[0]] === table[possibilityToWin[1]] && table[possibilityToWin[1]] === table[possibilityToWin[2]]) {
                winnerStrat = [possibilityToWin[0], possibilityToWin[1], possibilityToWin[2]];
                winOrNot = true;
            }
        }
    });
    if(winOrNot === true) {
        document.querySelector(".winner-name").textContent = winner;
        document.querySelector("#winner").classList.add("winner-show");
        document.querySelector("#winner").classList.remove("winner-hidden");
        winnerStrat.forEach(function(number) {
            document.querySelector(`#cell${number}`).style.backgroundColor = "red";
        });
    } else if(numberOfTurn === 9) {
        document.querySelector("#winner").lastChild.data = "Tie";
        document.querySelector("#winner").classList.add("winner-show");
        document.querySelector("#winner").classList.remove("winner-hidden");
    }
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function(e) {
        if(e.target.textContent === "" && winOrNot === false) {
            currentPlayerSpan.textContent = (currentPlayerSpan.textContent === "X" ? "O" : "X");
            e.target.textContent = (currentPlayerSpan.textContent === "X" ? "O" : "X");
            numberOfTurn++;
            table[e.target.id.slice(-1)] = e.target.textContent;
            if(numberOfTurn >= 5) {
                checkWinner(e.target.textContent);
            }
        }
    });
});

document.querySelector("#new-game").addEventListener("click", function(e) {
    table = ["", "", "", "", "", "", "", "", ""];
    numberOfTurn = 0;
    currentPlayerSpan.textContent = "X";
    document.querySelectorAll('.cell').forEach(function(cell) {
        cell.textContent = "";
    });
    winOrNot = false;
    document.querySelector("#winner").lastChild.data = " win !";
    document.querySelector(".winner-name").textContent = "";
    document.querySelector("#winner").classList.add("winner-hidden");
    document.querySelector("#winner").classList.remove("winner-show");
    winnerStrat = [];
    document.querySelectorAll(".cell").forEach(function(cell) {
        cell.style.backgroundColor = "royalblue";
    });
});