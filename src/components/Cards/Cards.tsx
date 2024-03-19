import React from 'react';

import Card from '../Card/Card';
import styles from './Cards.module.css';

type Movie = {
	image: string;
	title: string;
};

const Cards = ({movies, onClickMovie}) => {
	return (
		<ul className={styles.cardList}>
			{movies.map(movie => (
				<Card
					key={movie.id}
					movie={movie}
					onClickMovie={onClickMovie}
				/>
			))}
		</ul>
	);
};

console.log('cards rendered');

export default Cards;
