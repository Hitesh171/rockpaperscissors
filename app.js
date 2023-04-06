// Store the score for both players
let player1Score = 0;
let player2Score = 0;

// Get all the choice elements
const choices = document.querySelectorAll('.choice');

// Get the score elements
const player1ScoreEl = document.getElementById('player1Score');
const player2ScoreEl = document.getElementById('player2Score');

// Get the modal element
const modal = document.getElementById('modal');

// Get the modal content element
const modalContent = document.querySelector('.modal-content');

// Get the close button element
const closeBtn = document.querySelector('.close-btn');

// Add event listener to each choice element
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    // Generate random choice for player 2
    const player2Choice = generateRandomChoice();

    // Get the choice of player 1
    const player1Choice = choice.dataset.choice;

    // Show the choices of both players
    showChoices(player1Choice, player2Choice);

    // Determine the winner of the round
    const winner = determineWinner(player1Choice, player2Choice);

    // Update the score and scorecard based on the winner
    updateScore(winner);

    // Check if either player has won the game
    checkGameOver();

    // Show the modal with the result of the round
    showModal(winner);
  });
});

// Generate a random choice for player 2
function generateRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Show the choices of both players
function showChoices(player1Choice, player2Choice) {
  const player1ChoiceEl = document.getElementById('player1Choice');
  const player2ChoiceEl = document.getElementById('player2Choice');
  player1ChoiceEl.innerHTML = `
    
    <p>${player1Choice}</p>
  `;
  player2ChoiceEl.innerHTML = `
  
    <p>${player2Choice}</p>
  `;
}

// Determine the winner of the round
function determineWinner(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    return 'draw';
  } else if (
    (player1Choice === 'rock' && player2Choice === 'scissors') ||
    (player1Choice === 'paper' && player2Choice === 'rock') ||
    (player1Choice === 'scissors' && player2Choice === 'paper')
  ) {
    return 'player1';
  } else {
    return 'player2';
  }
}

// Update the score and scorecard based on the winner
function updateScore(winner) {
  if (winner === 'player1') {
    player1Score++;
    player1ScoreEl.textContent = player1Score;
  } else if (winner === 'player2') {
    player2Score++;
    player2ScoreEl.textContent = player2Score;
  }
}
function checkGameOver() {
  if (player1Score === 10 || player2Score === 10) {
    let winner;
    if (player1Score > player2Score) {
      winner = 'Player 1';
      alert('Player 1 has won!');
    } else if (player2Score > player1Score) {
      winner = 'Player 2';
      alert('computer has won!');
    } else {
      winner = 'No one';
    }
    showModal(`Game over! ${winner}`);
  }
}
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  player1Score = 0;
  player2Score = 0;
  player1ScoreEl.textContent = player1Score;
  player2ScoreEl.textContent = player2Score;
  const player1ChoiceEl = document.getElementById('player1Choice');
  const player2ChoiceEl = document.getElementById('player2Choice');
  player1ChoiceEl.innerHTML = '';
  player2ChoiceEl.innerHTML = ''
  modal.style.display = 'none';
});
/*resetBtn.addEventListener('click', () => {
  player1Score = 0;
  player2Score = 0;
  player1ScoreEl.textContent = player1Score;
  player2ScoreEl.textContent = player2Score;
  player1ChoiceEl.innerHTML = '';
  player2ChoiceEl.innerHTML = '';
  resultText.textContent = 'Choose your move!';
  modal.style.display = 'none';
});*/
const playAgainBtn = document.getElementById('play-again-btn');

playAgainBtn.addEventListener('click', () => {
  player1Score = 0;
  player2Score = 0;
  player1ScoreEl.textContent = player1Score;
  player2ScoreEl.textContent = player2Score;
  player1ChoiceEl.innerHTML = '';
  player2ChoiceEl.innerHTML = '';
  resultText.textContent = 'Choose your move!';
  modal.style.display = 'none';
});
  // Show the modal with the result of the round
function showModal(winner) {
  const result = document.getElementById('result');
  if (winner === 'draw') {
    result.textContent='It is a draw!';
  } else {
    result.textContent=`${winner} wins!`;
  }
  modal.style.display = 'block';
}
