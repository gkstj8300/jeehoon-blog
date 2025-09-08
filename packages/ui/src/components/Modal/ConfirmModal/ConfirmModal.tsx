import { ReactElement } from 'react';
import { Modal } from '..';
import styles from './ConfirmModal.module.scss';

export type ConfirmModalProps = {
	isOpen: boolean;
	title?: string | ReactElement;
	message: string | ReactElement;
	confirmButton?: string | ReactElement;
	closeButton?: string | ReactElement;
	onConfirm?: () => void;
	onClose?: () => void;
};

/**
 * Confirm Modal
 */
export function ConfirmModal(props: ConfirmModalProps) {
	const {
		isOpen,
		title,
		message,
		confirmButton,
		closeButton,
		onConfirm,
		onClose,
	} = { ...props };

	if (process.env.NODE_ENV === 'development') {
		if (isOpen && !message) {
			throw new Error('If the modal opens, needs a message.');
		}
	}

	return (
		<Modal isOpen={isOpen} title={title} onCancel={onClose}>
			<div className={styles.message}>{message}</div>

			<div className={styles.buttonContainer}>
				{!confirmButton || typeof confirmButton === 'string' ? (
					<div className={styles.confirm}>
						{confirmButton ?? '닫기'}
					</div>
				) : (
					<div onClick={onConfirm} className={styles.confirm}>
						{confirmButton}
					</div>
				)}

				{!closeButton || typeof closeButton === 'string' ? (
					<div>
						{closeButton ?? '확인'}
					</div>
				) : (
					<div onClick={onClose}>{closeButton}</div>
				)}
			</div>
		</Modal>
	);
};
ConfirmModal.displayName = 'ConfirmModal';
