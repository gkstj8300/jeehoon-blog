import { usePortal } from '@jeehoon/hooks';
import { assertNotNull } from '@jeehoon/utils';
import {
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import styles from './Modal.module.scss';
import { ModalTransition } from './ModalTransition';
import { Context } from './context';

interface ModalProps {
	isOpen?: boolean;
	title?: string | ReactNode;
	onCancel?: () => void;
	children?: React.ReactNode;
}

type Position = 'absolute' | 'fixed';

const TOP_SPACING = 25;

/**
 * Modal base component.
 */
export function Modal({
	children,
	title,
	...props
}: ModalProps) {
	const context = useContext(Context);
	const isOpen = props.isOpen ?? context.isOpen;
	const onCancel = props.onCancel ?? context.close;

	assertNotNull(isOpen);
	assertNotNull(onCancel);

	const { Portal } = usePortal();
	const focusTargetRef = useRef<HTMLDivElement | null>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState<Position>('absolute');
	const [top, setTop] = useState(0);

	const calculateModalPosition = useCallback(() => {
		if (!wrapperRef.current) {
			return;
		}

		if (window.innerHeight > wrapperRef.current.offsetHeight) {
			setPosition('fixed');
			return;
		}

		setPosition('absolute');
		setTop(window.pageYOffset + TOP_SPACING);
	}, []);

	const handleWindowResize = useCallback(() => {
		if (isOpen) {
			calculateModalPosition();
		}
	}, [calculateModalPosition, isOpen]);

	useEffect(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			if (['Esc', 'Escape'].includes(event.key)) {
				onCancel();
			}
		};

		document.addEventListener('keydown', handleKeydown);
		return () => document.removeEventListener('keydown', handleKeydown);
	}, [onCancel]);

	useEffect(() => {
		if (isOpen) {
			focusTargetRef.current?.focus();
		}

		if (!wrapperRef.current) {
			return;
		}

		const observer = new ResizeObserver(entries => {
			window.requestAnimationFrame(() => {
				if (!Array.isArray(entries) || !entries.length) {
					return;
				}
				handleWindowResize();
			});
		});

		observer.observe(wrapperRef.current);

		window.addEventListener('resize', handleWindowResize);

		return () => {
			observer.disconnect();
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [handleWindowResize, isOpen]);

	return (
		<Portal>
			<ModalTransition isOpen={isOpen}>
				<div
					className={styles.wrapper}
					style={{
						opacity: isOpen ? 1 : 0,
						position,
						top: position === 'fixed' ? '50%' : top,
						transform: position === 'fixed' ? 'translateY(-50%)' : undefined,
					}}
				>
					<div className={styles.overlay} onClick={() => onCancel()} />
					<div
						role="dialog"
						ref={wrapperRef}
						aria-modal={true}
						className={styles.modal}
						style={{
							transform:
								position === 'fixed'
									? 'translateX(-50%) translateY(-50%)'
									: undefined,
							top: position === 'fixed' ? '50%' : undefined,
						}}
					>
						{title && <h3 className={styles.title}>{title}</h3>}
						<div tabIndex={-1} ref={focusTargetRef} />
						{children}
						<button className={styles.closeButton} onClick={onCancel} />
					</div>
				</div>
			</ModalTransition>
		</Portal>
	);
};
Modal.displayName = 'Modal';
