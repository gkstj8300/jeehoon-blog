import { ClassAttributes, HTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';
import styles from './ListCodeBlock.module.scss';

interface ListCodeBlockProps {
	props: ClassAttributes<HTMLElement> &
		HTMLAttributes<HTMLElement> &
		ExtraProps;
}

export default function ListCodeBlock({ props }: ListCodeBlockProps) {
	const { children } = props;
	return (
		<div className={styles.codeBlock}>
			<code {...props}>{children}</code>
		</div>
	);
}
ListCodeBlock.displayName = 'ListCodeBlock';
