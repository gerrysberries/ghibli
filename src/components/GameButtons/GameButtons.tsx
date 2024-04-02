import styles from './GameButtons.module.css';

const GameButtons = ({toggleInstructions, restartGame, handleResetBest}) => {
	return (
		<div className={styles.btnsContainer}>
			<button
				className={styles.btn}
				onClick={toggleInstructions}
			>
				How to play
			</button>
			<button
				className={styles.btn}
				onClick={restartGame}
			>
				Restart Game
			</button>
			<button
				className={styles.btn}
				onClick={handleResetBest}
			>
				Reset High Score
			</button>
		</div>
	);
};

export default GameButtons;
