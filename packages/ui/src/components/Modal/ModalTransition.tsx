import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ModalTransition.module.scss';

interface ModalTransitionProps {
	isOpen: boolean;
	children?: React.ReactNode;
}

/**
 * Modal Transition & Display control
 */
export function ModalTransition ({ 
	isOpen,
	children
}: ModalTransitionProps) {
	const ref = useRef(null);
	return (
		<CSSTransition
			in={isOpen}
			timeout={300}
			classNames={{
				enter: styles.enter,
				enterActive: styles.enterActive,
				exitActive: styles.exitActive,
				exit: styles.exit,
			}}
			// unmount children on exited state
			unmountOnExit
			nodeRef={ref}
		>
			<div ref={ref}>{children}</div>
		</CSSTransition>
	);
};
ModalTransition.displayName = 'ModalTransition';
