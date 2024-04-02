import React from 'react';

import useToggle from './Hooks/useToggle';

import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Modal from './components/Modal/Modal';
import Wrapper from './components/Wrapper/Wrapper';
import HowToPlay from './components/HowToPlay/HowToPlay';
import GameOver from './components/GameOver/GameOver';
import GameButtons from './components/GameButtons/GameButtons';

function App() {
	const [score, setScore] = React.useState(0);
	const [bestScore, setBestScore] = React.useState(0);
	const [difficulty, setDifficulty] = React.useState('easy');
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
		// init();
	}, []);

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
			<GameButtons
				toggleInstructions={toggleInstructions}
				restartGame={restartGame}
				handleResetBest={handleResetBest}
			/>
			{difficulty && (
				<Cards
					movies={visibleMovies}
					onClickMovie={onClickMovie}
				/>
			)}
		</Wrapper>
	);

	function changeDifficulty(e): void {
		if (e.target.tagName !== 'BUTTON') return;
		console.log(e.target);

		const val: string = e.target.innerText.toLowerCase();
		setDifficulty(val);
		let nextMovies = [...shuffleMovies(allMovies)];

		if (val === 'easy') {
			nextMovies = nextMovies.slice(0, 5);
		} else if (val === 'moderate') {
			nextMovies = nextMovies.slice(0, 10);
		} else if (val === 'hard') {
			nextMovies = nextMovies.slice(0, 20);
		}

		setVisibleMovies(nextMovies);
		toggleInstructions();
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
		getNewMovies();
		setClickedMovies([]);
		setScore(0);
	}

	function getNewMovies() {
		let nextMovies = [...shuffleMovies(allMovies)];
		nextMovies = nextMovies.slice(0, visibleMovies.length);
		setVisibleMovies(nextMovies);
	}

	function handleResetBest() {
		setBestScore(0);
	}
}

export default App;
