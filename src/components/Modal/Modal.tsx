import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';

import styles from './Modal.module.css';

const Modal = ({toggle, children}) => {
	console.log(styles);

	return (
		<RemoveScroll>
			<FocusLock returnFocus={true}>
				<div className={styles.wrapper}>
					<div
						className={styles.backdrop}
						onClick={toggle}
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
