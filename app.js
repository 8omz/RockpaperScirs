let humanScore = 0
let ComputerScore = 0
// Define inputs
const choices = ['rock', 'paper', 'scissors']

// Get the computers choice
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    console.log(compChoice)
    return compChoice
}
// Get player choice
function getHumanChoice() {
    let value = prompt(`Chose between rock paper and scissors;
        Rock = 1, Paper = 2, Scissors = 3`)
    return value - 1
}

function playGame() {
    function playRound(hum, comp) {
        if (hum === comp) {
            console.log("equal values")

        } else if (hum === 0 && comp === 2) {
            humanScore += 1
            console.log("Rock beats scissors u win")
        } else if (hum === 1 && comp === 0) {
            humanScore += 1
            console.log("Paper beats Rock u win")

        } else if (hum === 2 && comp === 1) {
            humanScore += 1
            console.log("Scissors beats paper u win")

        } else if (comp === 0 && hum === 2) {
            ComputerScore += 1
            console.log("Rock beats scissors u lose")
        } else if (comp === 1 && hum === 0) {
            ComputerScore += 1
            console.log("Paper beats Rock u lose")

        } else if (comp === 2 && hum === 1) {
            ComputerScore += 1
            console.log("Scissors beats paper u lose")

        }
    }
    playRound(getHumanChoice(), getComputerChoice())
    console.log("this is the humans score:" + humanScore)
    console.log("computers score:" + ComputerScore)
    playRound(getHumanChoice(), getComputerChoice())
    console.log("this is the humans score:" + humanScore)
    console.log("computers score:" + ComputerScore)
    playRound(getHumanChoice(), getComputerChoice())
    console.log("this is the humans score:" + humanScore)
    console.log("computers score:" + ComputerScore)
    playRound(getHumanChoice(), getComputerChoice())
    console.log("this is the humans score:" + humanScore)
    console.log("computers score:" + ComputerScore)
    playRound(getHumanChoice(), getComputerChoice())
    console.log("this is the humans score:" + humanScore)
    console.log("computers score:" + ComputerScore)

    if (humanScore === 3 ){
        alert("YOU WIN!")
    }else if (ComputerScore === 3){
        alert("You lost")
    }else if()
}

playGame()