// sfx
const sfx = {
    suika: new Howl({
        src: [
            'public/suika.mp3'
        ],
        loop: false,
        onend: function() {
            console.log("Done playing sfx!")
        }
    })
}

document.querySelector(".play-music").addEventListener("click", () => {
    // Resume the AudioContext
    if (Howler.ctx.state === 'suspended') {
        Howler.ctx.resume().then(() => {
            if (!sfx.suika.playing()) {
                sfx.suika.play();
            }
        });
    } else {
        if (!sfx.suika.playing()) {
            sfx.suika.play();
        }
    }
});


document.querySelector(".stop-music").addEventListener("click", () => {
    sfx.suika.pause();
});


let humanScore = 0
let ComputerScore = 0
let rounds = 0
let value;
const para = document.querySelector(".para")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const hScore = document.querySelector(".humanScore")
const cScore = document.querySelector(".compScore")
const winLoseBox = document.querySelector(".winLoseContainer")
const winLoseText = document.querySelector('.winLoseText')
const finalScreen = document.querySelector('.finalScreen')
const btnRestart = document.querySelector('.restart')
const userPic = document.querySelector('.pic1')
const compPic = document.querySelector('.pic2')

function winLoseDraw(result) {
    para.textContent = result
}

// Get the computers choice
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0) {
        compPic.src = "public/rock.png"
    } else if (compChoice == 1){
        compPic.src = "public/paper.png"

    }else if(compChoice==2){
        compPic.src = "public/scissors.png"
    }
        return compChoice

}
// Plays a singular round, checks player input in comparison to the computers random input, after 5 wins a winner is chosen
function playRound(hum, comp) {
    if (hum === comp) {
        winLoseDraw("Draw! You made the same selection")

    } else if (hum === 0 && comp === 2) {
        humanScore += 1
        winLoseDraw("Rock beats scissors u win")
    } else if (hum === 1 && comp === 0) {
        humanScore += 1
        winLoseDraw("Paper beats Rock u win")

    } else if (hum === 2 && comp === 1) {
        humanScore += 1
        winLoseDraw("Scissors beats paper u win")

    } else if (comp === 0 && hum === 2) {
        ComputerScore += 1
        winLoseDraw("Rock beats scissors u lose")
    } else if (comp === 1 && hum === 0) {
        ComputerScore += 1
        winLoseDraw("Paper beats Rock u lose")

    } else if (comp === 2 && hum === 1) {
        ComputerScore += 1
        winLoseDraw("Scissors beats paper u lose")

    }
    hScore.textContent = `Your score: ${humanScore}`
    cScore.textContent = `Computer score: ${ComputerScore}`
    if (humanScore == 5) {
        winLoseText.textContent = "YOU WIN!"
        winLoseBox.style.background = "rgba(72, 255, 0, 0.836)"
        finalScreen.classList.remove("hidden")
        finalScreen.classList.add("show")
    } else if (ComputerScore == 5) {
        winLoseText.textContent = "YOU LOSE!"
        winLoseBox.style.background = "rgba(255, 0, 0, 0.836)"
        finalScreen.classList.remove("hidden")
        finalScreen.classList.add("show")
    }
}
rock.addEventListener("click", () => {
    value = 0
    userPic.src = "public/rock.png"
    playRound(value, getComputerChoice())
})
paper.addEventListener("click", () => {
    value = 1
    userPic.src = "public/paper.png"

    playRound(value, getComputerChoice())
})
scissors.addEventListener("click", () => {
    value = 2
    userPic.src = "public/scissors.png"

    playRound(value, getComputerChoice())
})

// restarts the game 
btnRestart.addEventListener("click", () => {
    window.location.reload();
})