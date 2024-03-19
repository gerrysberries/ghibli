import React from 'react';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';

import styles from './Modal.module.css';

const Modal = ({toggleModal, changeDifficulty}) => {
	return (
		<RemoveScroll>
			<FocusLock returnFocus={true}>
				<div className={styles.wrapper}>
					<div
						className={styles.backdrop}
						onClick={toggleModal}
					>
						<div
							className={styles.modal}
							onClick={e => e.stopPropagation()}
						>
							<div>
								<p>
									<strong>How to Play</strong>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dignissimos recusandae velit atque sit ut temporibus suscipit error sed, repellendus commodi quam. Dolores accusamus ratione fugit qui, possimus sint quae.
								</p>
								<p>
									<strong>Choose your difficulty:</strong>
								</p>
								<button onClick={changeDifficulty}>Easy</button>
								<button onClick={changeDifficulty}>Moderate</button>
								<button onClick={changeDifficulty}>Hard</button>
							</div>
							<button onClick={toggleModal}>Close Modal</button>
						</div>
					</div>
				</div>
			</FocusLock>
		</RemoveScroll>
	);
};

export default Modal;
