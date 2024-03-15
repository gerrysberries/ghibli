import React from 'react';

import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Modal from './components/Modal/Modal';

function App() {
	const [score, setScore] = React.useState(0);
	const [bestScore, setBestScore] = React.useState(0);
	const [clickedMovies, setClickedMovies] = React.useState([]);
	const [movies, setMovies] = React.useState([]);
	const [modalVisible, setModalVisible] = React.useState(false);

	function onClickMovie(id: string): void {
		shuffleMovies();

		checkIfClicked(id);
	}

	function shuffleMovies(): void {
		const shuffledMovies = [...movies];

		for (let i = shuffledMovies.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledMovies[i], shuffledMovies[j]] = [shuffledMovies[j], shuffledMovies[i]];
		}

		setMovies(shuffledMovies);
	}

	function checkIfClicked(id: string) {
		if (!clickedMovies.includes(id)) {
			setScore(score + 1);
			setClickedMovies([...clickedMovies, id]);

			if (score + 1 > bestScore) setBestScore(score + 1);
		} else {
			setScore(0);
			setClickedMovies([]);
		}
	}

	function toggleModal() {
		setModalVisible(currentVisible => !currentVisible);
	}

	React.useEffect(() => {
		fetch('https://ghibliapi.vercel.app/films', {
			headers: {
				Authorization: 'Bearer YOUR_API_KEY',
			},
		})
			.then(response => response.json())
			.then(data => setMovies(data))
			.catch(error => console.error('Error fetching data:', error));
	}, []);

	// console.log(movies);
	console.log(clickedMovies);

	return (
		<>
			{modalVisible && <Modal toggleModal={toggleModal} />}
			<Header
				score={score}
				bestScore={bestScore}
			/>
			<button onClick={toggleModal}>How to play</button>
			<button
				onClick={() => {
					setScore(0);
					setBestScore(0);
					setClickedMovies([]);
				}}
			>
				Restart Game
			</button>
			<Cards
				movies={movies}
				onClickMovie={onClickMovie}
			/>
		</>
	);
}

export default App;
