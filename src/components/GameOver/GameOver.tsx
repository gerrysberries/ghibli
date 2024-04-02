import styles from './GameOver.module.css';

type GameOverProps = {
	gameStatus: 'won' | 'lost';
	score: number;
	restartGame: () => void;
};

const GameOver = ({gameStatus, score, restartGame}: GameOverProps) => {
	return (
		<div>
			{gameStatus === 'won' ? <Win score={score} /> : <Loss score={score} />}
			<button
				className={styles.btn}
				onClick={restartGame}
			>
				Restart Game
			</button>
			<button
				className={styles.btn}
				onClick={restartGame}
			>
				Change Difficulty
			</button>
		</div>
	);
};

const Win = ({score}: {score: number}) => {
	return (
		<div>
			<p>Congratulations, you win!</p>
			<p>Score: {score}</p>
		</div>
	);
};

const Loss = ({score}: {score: number}) => {
	return (
		<div>
			<p>Sorry, you lose!</p>
			<p>Score: {score}</p>
		</div>
	);
};

export default GameOver;
