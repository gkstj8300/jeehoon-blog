import { RefObject, MouseEvent } from 'react';
import styles from './BackToTop.module.scss';

interface BackToTopProps {
	layoutRootRef: RefObject<HTMLDivElement>;
}

export default function BackToTop({ layoutRootRef }: BackToTopProps) {
	const handleClickBackToTop = (event: MouseEvent) => {
		event.preventDefault();
		if (layoutRootRef.current) {
			layoutRootRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<a
			href=""
			className={styles.backToTop}
			onClick={handleClickBackToTop}
			aria-label="Back to Top"
		/>
	);
}
BackToTop.displayName = 'BackToTop';
