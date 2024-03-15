import React from 'react';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';

import styles from './Modal.module.css';

const Modal = ({toggleModal}) => {
	return (
		<RemoveScroll>
			<FocusLock returnFocus={true}>
				<div className={styles.backdrop}>
					<div className={styles.modal}>
						<div>
							<a href="#">test</a>
							<a href="#">test</a>
							<a href="#">test</a>
						</div>
						<button onClick={toggleModal}>Close Modal</button>
					</div>
				</div>
			</FocusLock>
		</RemoveScroll>
	);
};

export default Modal;
