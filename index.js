// game variables
let player1Score = 0
let player2Score = 0
let player1Turn = true

// grab DOM nodes
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

// functions

function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "inline-block"
}

function reset() {
    player1Turn = true
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = player1Score
    player2Scoreboard.textContent = player2Score
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    rollBtn.style.display = "inline-block"
    resetBtn.style.display = "none"
    player2Dice.classList.remove('active')
    player1Dice.classList.add("active")
}

// game logic

rollBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.classList.remove("active")
        player1Dice.textContent = randomNumber
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.classList.remove("active")
        player2Dice.textContent = randomNumber
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    if (player1Score >= 20) {
        message.textContent = "Player 1 has won 🥳"
        showDisplayButton()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won 🎉"
        showDisplayButton()
    }
    player1Turn = !player1Turn
})

resetBtn.addEventListener("click", reset)
