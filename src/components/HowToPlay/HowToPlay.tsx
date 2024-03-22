import styles from './HowToPlay.module.css';

type HowToPlayProps = {
	changeDifficulty: () => void;
	toggle: () => void;
};

const HowToPlay = ({changeDifficulty, toggle}: HowToPlayProps) => {
	return (
		<div className={styles.modal}>
			<div>
				<h2 className={styles.subheading}>How to Play</h2>
				<p>Clicking on a movie will shuffle the entire list. Try and click every movie without selecting the same ones twice. Good luck!</p>
				<div>
					<h2 className={styles.subheading}>Choose your difficulty to begin</h2>
					<div
						onClick={changeDifficulty}
						className={styles.btnContainer}
					>
						<button className={styles.btn}>Easy</button>
						<button className={styles.btn}>Moderate</button>
						<button className={styles.btn}>Hard</button>
					</div>
				</div>
			</div>

			<button
				className={styles.btn}
				onClick={toggle}
			>
				Close
			</button>
		</div>
	);
};

export default HowToPlay;
