import dynamic from 'next/dynamic';
import CautionCodeBlock from './CautionCodeBlock';
import styles from './CustomCodeBlock.module.scss';
import ListCodeBlock from './ListCodeBlock';
import PointCodeBlock from './PointCodeBlock';
import { CustomMarkdownType } from '@/shared/types/slug';

const SyntaxHighlighter = dynamic(
	() => import('react-syntax-highlighter').then(mod => mod.Prism),
	{ ssr: false }
);

export default function CustomCodeBlock({ props, style }: CustomMarkdownType) {
	const { className, children } = props;
	const match = /language-(\w+)/.exec(className || '');

	if (match?.[1] === 'point') {
		return <PointCodeBlock content={String(children).replace(/\n$/, '')} />;
	}

	if (match?.[1] === 'list') {
		return <ListCodeBlock props={props} />;
	}

	if (match?.[1] === 'caution') {
		return <CautionCodeBlock content={String(children).replace(/\n$/, '')} />;
	}

	if (
		(match?.[1] === 'javascript' ||
			match?.[1] === 'js' ||
			match?.[1] === 'ts') &&
		style
	) {
		return (
			<SyntaxHighlighter
				className={styles.scriptBlock}
				style={style}
				language="javascript"
				PreTag="pre"
				showLineNumbers
				wrapLines
			>
				{String(children).replace(/\n$/, '')}
			</SyntaxHighlighter>
		);
	}
}
