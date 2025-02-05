import React, { VFC } from 'react';
import styles from './MainLoader.module.scss';

export const MainLoader: VFC = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.loader}>Loading...</div>
		</div>
	);
};

MainLoader.displayName = 'MainLoader';
