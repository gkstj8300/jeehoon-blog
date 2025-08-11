import React from 'react';
import styles from './MainLoader.module.scss';

export default function MainLoader() {
	return (
		<div className={styles.overlay}>
			<div className={styles.loader}>Loading...</div>
		</div>
	);
}

MainLoader.displayName = 'MainLoader';
