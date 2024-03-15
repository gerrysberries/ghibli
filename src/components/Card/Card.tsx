import React from 'react';

import styles from './Card.module.css';

const Card = ({movie, onClickMovie}) => {
	return (
		<li>
			<img
				key={movie.id}
				className={styles.card}
				src={movie.image}
				alt={movie.title}
				onClick={() => onClickMovie(movie.id)}
			/>
		</li>
	);
};

export default Card;
