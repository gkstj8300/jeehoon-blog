import styles from './Notice.module.scss';

interface NoticeProps {
	description: string;
}

export default function Notice({ description }: NoticeProps) {
	return (
		<div className={styles.container}>{description}</div>
	);
}
Notice.displayName = 'Notice';
