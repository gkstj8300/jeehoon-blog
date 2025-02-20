import React, { RefObject } from 'react';
import styles from './BackToTop.module.scss';

type Props = {
	layoutRootRef: RefObject<HTMLDivElement>;
};

export const BackToTop: React.VFC<Props> = ({ layoutRootRef }) => {
	const handleClickBackToTop = (event: React.MouseEvent) => {
		event.preventDefault();
		if (layoutRootRef.current) {
			layoutRootRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<a
			href="#"
			className={styles.backToTop}
			onClick={handleClickBackToTop}
			aria-label="Back to Top"
		/>
	);
};
