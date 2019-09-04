const choices = document.querySelectorAll('.choice')
const score = document.querySelector('.score')
const cpuResult = document.querySelector('.cpu-result')
const result = document.querySelector('.result')
const restart = document.querySelector('.restart')
const scoreboard = {
    player:0,
    computer:0
}



function play(e) {
const computerPick = cpuChoice()
const playerChoice = e.target.id;
const winner = getWinner(playerChoice,computerPick)
showWinner(winner,computerPick)
}

// Computer Choice
function cpuChoice() {
    const rand = Math.random()
    if (rand <= .34) {
        return 'rock'
    } else if (rand <.65 && rand >.34) {
        return 'paper'
    } else {
        return 'scissors'
    }

}
// Get Winner
    
function getWinner(p, c) {
    if (p === c) {
      return 'draw';
    } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
    }
  }

function showWinner(winner,computerPick) {
    if (winner === 'player') {
    scoreboard.player++;
    cpuResult.innerHTML = `<h2 id='text-win'>Win!</h2>
    <img  src="icons/${computerPick}.png"> `
    
    } else if (winner === 'computer') {
        scoreboard.computer++;
        cpuResult.innerHTML = `<h2 id='text-lose'>Lose!</h2>
        <img  src="icons/${computerPick}.png">`
    } else {
        cpuResult.innerHTML = `<h2>Draw!</h2>
       <img src="icons/${computerPick}.png"> `
    }
    score.innerHTML = `
    <p>Player:${scoreboard.player}</p>
    <p>Computer:${scoreboard.computer}</p>
    `
    result.style.display ='block'
}

function restartGame() {
  result.style.display = 'none'
  scoreboard.player =0;
  scoreboard.computer =0;
  score.innerHTML = `
  <p>Player:0 </p>
  <p>Computer:0</p>
  `
}


restart.addEventListener('click',restartGame)
choices.forEach(choices => choices.addEventListener('click', play))
