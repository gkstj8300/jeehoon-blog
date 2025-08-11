import { FiAlertCircle } from '@react-icons/all-files/fi/FiAlertCircle';
import styles from './PointCodeBlock.module.scss';

interface PointCodeBlockProps {
	content: string;
}

export default function PointCodeBlock({ content }: PointCodeBlockProps) {
	return (
		<div className={styles.container}>
			<div className={styles.codeBlock}>
				<FiAlertCircle className={styles.content} />
			</div>
			{content}
		</div>
	);
}
PointCodeBlock.displayName = 'PointCodeBlock';
