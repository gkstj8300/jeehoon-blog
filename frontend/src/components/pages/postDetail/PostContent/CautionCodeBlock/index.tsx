import { FiAlertTriangle } from '@react-icons/all-files/fi/FiAlertTriangle';
import styles from './CautionCodeBlock.module.scss';

interface CautionCodeBlockProps {
	content: string;
}

export default function CautionCodeBlock({ content }: CautionCodeBlockProps) {
	return (
		<div className={styles.container}>
			<div className={styles.codeBlock}>
				<FiAlertTriangle className={styles.content} />
			</div>
			{content}
		</div>
	);
}
CautionCodeBlock.displayName = 'CautionCodeBlock';
