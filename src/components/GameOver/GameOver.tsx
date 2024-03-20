const GameOver = ({gameStatus, score, restartGame}: {gameStatus: string; score: number}) => {
	return gameStatus === 'won' ? (
		<Win
			score={score}
			restartGame={restartGame}
		/>
	) : (
		<Loss
			score={score}
			restartGame={restartGame}
		/>
	);
};

const Win = ({score, restartGame}) => {
	return (
		<div>
			<p>Congratulations, you win!</p>
			<p>Score: {score}</p>
			<button onClick={restartGame}>Restart Game</button>
		</div>
	);
};

const Loss = ({score, restartGame}) => {
	return (
		<div>
			<p>Sorry, you lose!</p>
			<p>Score: {score}</p>
			<button onClick={restartGame}>Restart Game</button>
		</div>
	);
};

export default GameOver;
