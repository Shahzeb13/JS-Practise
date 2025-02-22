let gameScore = JSON.parse(localStorage.getItem('gameScore')) || {
    Wins: 0,
    Losses: 0
};

function generateRandomGuess() {
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
}

function calScore(gameResult) {
    if (gameResult === 'You won!') {
        gameScore.Wins += 1;
    } else if (gameResult === 'You lost!') {
        gameScore.Losses += 1;
    }
}

function playGame(guess) {
    let coinResult = generateRandomGuess();
    let gameResult = guess === coinResult ? 'You won!' : 'You lost!';
    calScore(gameResult);
    localStorage.setItem('gameScore', JSON.stringify(gameScore));

    let coinImage = document.getElementById('coinImage');
    coinImage.src = coinResult === 'Heads' ? 'heads.png' : 'tails.png';
    coinImage.style.display = 'block';

    alert(`Your Guess: ${guess}\nComputer Guess: ${coinResult}\nResult: ${gameResult}\nWins: ${gameScore.Wins} | Losses: ${gameScore.Losses}`);
}

function resetScore() {
    localStorage.removeItem('gameScore');
    gameScore.Wins = 0;
    gameScore.Losses = 0;
    alert('Score has been reset!');
    document.getElementById('coinImage').style.display = 'none';
}
