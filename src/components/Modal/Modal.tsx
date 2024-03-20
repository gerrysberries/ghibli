import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';

import styles from './Modal.module.css';

const Modal = ({toggleModal, changeDifficulty, children}) => {
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
							{children}
						</div>
					</div>
				</div>
			</FocusLock>
		</RemoveScroll>
	);
};

export default Modal;
