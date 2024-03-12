import React from 'react';

import styles from './Cards.module.css';

type Movie = {
	image: string;
	title: string;
};

const Cards = ({movies, onClickMovie}) => {
	return (
		<ul className={styles.cardList}>
			{movies.map(movie => (
				<img
					key={movie.id}
					className={styles.card}
					src={movie.image}
					alt={movie.title}
					onClick={() => onClickMovie(movie.id)}
				/>
			))}
		</ul>
	);
};

export default Cards;
