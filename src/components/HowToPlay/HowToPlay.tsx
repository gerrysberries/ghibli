const HowToPlay = ({changeDifficulty, toggle}) => {
	return (
		<>
			<div onClick={changeDifficulty}>
				<p>
					<strong>How to Play</strong>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dignissimos recusandae velit atque sit ut temporibus suscipit error sed, repellendus commodi quam. Dolores accusamus ratione fugit qui, possimus sint quae.
				</p>
				<p>
					<strong>Choose your difficulty:</strong>
				</p>
				<button>Easy</button>
				<button>Moderate</button>
				<button>Hard</button>
			</div>
			<button onClick={toggle}>Close Modal</button>
		</>
	);
};

export default HowToPlay;
