import React from 'react';
import styles from './Header.module.css';

const Header = ({score, bestScore}: {score: number; bestScore: number}) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Ghibli Memory Game</h1>
			<div className={styles.score}>
				<p>Score: {score}</p>
				<p>Best score: {bestScore}</p>
			</div>
		</header>
	);
};

export default Header;
