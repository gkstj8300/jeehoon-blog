import styles from './PostTitle.module.scss';

interface PostTitleProps {
	title: string;
}

export default function PostTitle({ title }: PostTitleProps) {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
		</div>
	);
}
PostTitle.displayName = 'PostTitle';
