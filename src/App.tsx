import React from 'react';

import useToggle from './Hooks/useToggle';

import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Modal from './components/Modal/Modal';
import Wrapper from './components/Wrapper/Wrapper';
import HowToPlay from './components/HowToPlay/HowToPlay';
import GameOver from './components/GameOver/GameOver';

function App() {
	const [score, setScore] = React.useState(0);
	const [bestScore, setBestScore] = React.useState(0);
	const [difficulty, setDifficulty] = React.useState('Easy');
	const [allMovies, setAllMovies] = React.useState([]);
	const [visibleMovies, setVisibleMovies] = React.useState([]);
	const [clickedMovies, setClickedMovies] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState('running');

	const [showInstructions, toggleInstructions] = useToggle(true);
	const [showGameOver, toggleGameOver] = useToggle(false);

	React.useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await fetch('https://ghibliapi.vercel.app/films', {
					headers: {
						Authorization: 'Bearer YOUR_API_KEY',
					},
				});
				const data = await response.json();
				setAllMovies(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}

		fetchMovies();
	}, []);

	function changeDifficulty(e): void {
		if (e.target.tagName !== 'BUTTON') return;

		const val: string = e.target.innerText;
		setDifficulty(val);
		let nextMovies = [...shuffleMovies(allMovies)];

		if (val === 'Easy') {
			nextMovies = nextMovies.slice(0, 5);
		} else if (val === 'Moderate') {
			nextMovies = nextMovies.slice(0, 10);
		} else if (val === 'Hard') {
			nextMovies = nextMovies.slice(0, 20);
		}

		setVisibleMovies(nextMovies);
		toggleInstructions();
	}

	function getNewMovies() {
		let nextMovies = [...shuffleMovies(allMovies)];

		nextMovies = nextMovies.slice(0, visibleMovies.length);
		setVisibleMovies(nextMovies);
	}

	function onClickMovie(id: string): void {
		setVisibleMovies(shuffleMovies(visibleMovies));

		handleClickCard(id);
	}

	function shuffleMovies(movies) {
		const shuffledMovies = [...movies];

		for (let i = shuffledMovies.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledMovies[i], shuffledMovies[j]] = [shuffledMovies[j], shuffledMovies[i]];
		}

		return shuffledMovies;
	}

	function handleClickCard(id: string) {
		if (!clickedMovies.includes(id)) {
			const nextScore = score + 1;
			setScore(nextScore);
			if (nextScore === visibleMovies.length) {
				setGameStatus('won');
				toggleGameOver();
			}

			setClickedMovies([...clickedMovies, id]);
		} else {
			setGameStatus('lose');
			toggleGameOver();
		}
	}

	function restartGame() {
		if (score > bestScore) setBestScore(score);

		showGameOver && toggleGameOver();
		setClickedMovies([]);
		setScore(0);
	}

	return (
		<Wrapper>
			{showInstructions && (
				<Modal toggle={toggleInstructions}>
					<HowToPlay
						changeDifficulty={changeDifficulty}
						toggle={toggleInstructions}
					/>
				</Modal>
			)}
			{showGameOver && (
				<Modal toggle={restartGame}>
					<GameOver
						gameStatus={gameStatus}
						score={score}
						restartGame={restartGame}
					/>
				</Modal>
			)}
			<Header
				score={score}
				bestScore={bestScore}
			/>
			<button onClick={toggleInstructions}>How to play</button>
			<button onClick={restartGame}>Restart Game</button>
			<button onClick={() => setBestScore(0)}>Reset High Score</button>
			{difficulty && (
				<Cards
					movies={visibleMovies}
					onClickMovie={onClickMovie}
				/>
			)}
		</Wrapper>
	);
}

export default App;
