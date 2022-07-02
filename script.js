function computerPlay()
{
	const moves = ['Rock', 'Paper', 'Scissors'];
	const ran = Math.floor(Math.random() * 3);
	return moves[ran];
}

function playRound(playerSelection, computerSelection)
{
	console.log(`You chose ${playerSelection}, Computer chose ${computerSelection}!`);
	if (playerSelection === computerSelection)
		return `Draw`;
	if (playerSelection === 'rock' && computerSelection === 'paper')
		return `You Lose! Paper beats Rock`;
	if (playerSelection === 'scissors' && computerSelection === 'paper')
		return `You Win! Scissors beats Paper`;

	if (playerSelection === 'paper' && computerSelection === 'rock')
		return `You Win! Paper beats Rock`;
	if (playerSelection === 'scissors' && computerSelection === 'rock')
		return `You Lose! Rock beats Scissors`;

	if (playerSelection === 'paper' && computerSelection === 'scissors')
		return `You Lose! Scissors beats Paper`;
	if (playerSelection === 'rock' && computerSelection === 'scissors')
		return `You Win! Rock beats Scissors`;
}

function game()
{
	let playerSelection, computerSelection, result;
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++)
	{
		playerSelection = prompt('Choose your move: ').toLowerCase();
		computerSelection = computerPlay().toLowerCase();
		result = playRound(playerSelection, computerSelection);
		console.log(result);
		if (result.search('Lose') >= 0)
			computerScore++;
		else if (result.search('Win') >= 0)
			playerScore++;
	}

	console.log(`Your score is: ${playerScore}`);
	console.log(`Computer's score is: ${computerScore}`);
	if (playerScore > computerScore)
		console.log('%c You Win!!!', 'color: green;');
	else if (playerScore < computerScore)
		console.log('%c You Lose!!!', 'color: red;');
	else
		console.log('%c Draw!!', 'color: blue;');
}
