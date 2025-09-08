import { Icons } from '@jeehoon/ui';
import styles from './CautionCodeBlock.module.scss';

interface CautionCodeBlockProps {
	content: string;
}

export default function CautionCodeBlock({ content }: CautionCodeBlockProps) {
	return (
		<div className={styles.container}>
			<div className={styles.codeBlock}>
				<Icons.FiAlertTriangle className={styles.content} />
			</div>
			{content}
		</div>
	);
}
CautionCodeBlock.displayName = 'CautionCodeBlock';
