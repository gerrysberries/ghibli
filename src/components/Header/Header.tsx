import styles from './Header.module.css';

const Header = ({score, bestScore}: {score: number; bestScore: number}) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>
				<a href="./">Ghibli Memory Game</a>
			</h1>
			<div className={styles.score}>
				<p>Score: {score}</p>
				<p>High score: {bestScore}</p>
			</div>
		</header>
	);
};

export default Header;
