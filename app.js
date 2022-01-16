var playerScore = 0;
var computerScore = 0;

const playerScoreDisplay = document.querySelector('.player-score p')
const computerScoreDisplay = document.querySelector('.computer-score p')

const introScreen = document.querySelector('.intro');
const matchScreen = document.querySelector('.match');
const winner = document.querySelector('.winner');

const playBtn = document.querySelector('.intro button');
const options = document.querySelectorAll('.options button');

const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

playBtn.addEventListener('click', function () {
    introScreen.classList.add('fadeout');
    matchScreen.classList.remove('fadeout');
    matchScreen.classList.add('fadein');
});

options.forEach(function (option) {
    option.addEventListener('click', function () {
        const playerChoice = option.innerHTML;
        const computerChoice = computerLogic();
        playerHand.style.animation = 'shakePlayer 1s ease';
        computerHand.style.animation = 'shakeComputer 1s ease';
        setTimeout(function () {
            playerHand.setAttribute("src", `./assets/${playerChoice}.png`);
            computerHand.setAttribute("src", `./assets/${computerChoice}.png`);
            game(playerChoice, computerChoice);
        }, 1000);
        setTimeout(function () {
            playerHand.style.animation = '';
            computerHand.style.animation = '';
            playerHand.setAttribute("src", `./assets/rock.png`);
            computerHand.setAttribute("src", `./assets/rock.png`);
        }, 1800);
    });
});
//Computer logic
function computerLogic() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber];
};
//Game rules
function game(playerChoice, computerChoice) {
    switch (playerChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(playerChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(playerChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(playerChoice);
            break;
    }
}

function win(playerChoice, computerChoice) {
    playerScore++
    playerScoreDisplay.innerHTML = playerScore
    winner.innerHTML = `${playerChoice} beats ${computerChoice} You Win`
};

function lose(playerChoice, computerChoice) {
    computerScore++
    computerScoreDisplay.innerHTML = computerScore
    winner.innerHTML = `${computerChoice} beats ${playerChoice} Computer Wins`
};

function draw(playerChoice) {
    winner.innerHTML = `Both Chose ${playerChoice} It is a Draw`
};
