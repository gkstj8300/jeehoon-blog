import { Icons } from '@jeehoon/ui';
import styles from './PointCodeBlock.module.scss';

interface PointCodeBlockProps {
	content: string;
}

export default function PointCodeBlock({ content }: PointCodeBlockProps) {
	return (
		<div className={styles.container}>
			<div className={styles.codeBlock}>
				<Icons.FiAlertCircle className={styles.content} />
			</div>
			{content}
		</div>
	);
}
PointCodeBlock.displayName = 'PointCodeBlock';
