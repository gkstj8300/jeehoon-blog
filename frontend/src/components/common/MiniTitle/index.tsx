import styles from './MiniTitle.module.scss';

export type DevelopType = 'Feature' | 'Fix' | 'Style' | 'Test' | 'Stabilize';

interface MiniTitleProps {
	type: DevelopType;
}

export default function MiniTitle({ type }: MiniTitleProps) {
	return (
		<div className={styles.miniTitle} data-developType={type}>
			{type}
		</div>
	);
}
MiniTitle.displayName = 'MiniTitle';
