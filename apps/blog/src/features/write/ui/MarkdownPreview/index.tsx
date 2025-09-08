import dynamic from 'next/dynamic';
import {
	useCallback,
	useEffect,
	useState,
	useMemo,
	CSSProperties,
	DetailedHTMLProps,
	HTMLAttributes,
} from 'react';
import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import styles from './MarkdownPreview.module.scss';
import CustomCodeBlock from '@/entities/post/ui/PostContent/CustomCodeBlock';
import { markDownContentFormat } from '@/entities/post/utils/markDown';
import { useSelector } from '@/shared/lib/store/hooks';
import { selectTheme } from '@/shared/lib/store/modules/common/selectors';
import { loadStyle } from '@/shared/utils/loadStyle';

const DynamicReactMarkdown = dynamic(() => import('react-markdown'), {
	ssr: false,
});

interface MarkdownPreviewProps {
	content: string;
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
	const [style, setStyle] = useState<{ [key: string]: CSSProperties } | null>(
		null
	);

	const markDownContent = markDownContentFormat(content);
	const theme = useSelector(selectTheme);
	const generateHeadingId = useCallback((text: string) => text.replace(/\s+/g, '-').toLowerCase(), []);

	const markdownComponents = useMemo(
		() => createMarkdownComponents(style, theme, generateHeadingId),
		[style, theme, generateHeadingId]
	);

	useEffect(() => {
		loadStyle(theme).then(setStyle);
	}, [theme]);

	return (
		<div className={styles.editor}>
			<DynamicReactMarkdown
				remarkPlugins={[remarkGfm, remarkBreaks]}
				rehypePlugins={[rehypeRaw]}
				components={markdownComponents}
			>
				{markDownContent}
			</DynamicReactMarkdown>
		</div>
	);
}
MarkdownPreview.displayName = 'MarkdownPreview';

function createMarkdownComponents(
	style: { [key: string]: CSSProperties } | null,
	theme: string,
	generateHeadingId: (text: string) => string
) {
	return {
		code(props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
			return <CustomCodeBlock props={props} style={style} theme={theme} />;
		},
		h1: ({
			children,
			...props
		}: DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>) => (
			<h1
				id={generateHeadingId(String(children))}
				style={{ fontSize: '2em' }}
				{...props}
			>
				{children}
			</h1>
		),
		h2: ({
			children,
			...props
		}: DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>) => (
			<h2
				id={generateHeadingId(String(children))}
				style={{ fontSize: '1.75em' }}
				{...props}
			>
				{children}
			</h2>
		),
		h3: ({
			children,
			...props
		}: DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>) => (
			<h3
				id={generateHeadingId(String(children))}
				style={{ fontSize: '1.5em' }}
				{...props}
			>
				{children}
			</h3>
		),
		h4: (
			props: DetailedHTMLProps<
				HTMLAttributes<HTMLHeadingElement>,
				HTMLHeadingElement
			>
		) => <h4 style={{ fontSize: '1.25em' }} {...props} />,
		h5: (
			props: DetailedHTMLProps<
				HTMLAttributes<HTMLHeadingElement>,
				HTMLHeadingElement
			>
		) => <h5 style={{ fontSize: '1em' }} {...props} />,
		p: (
			props: DetailedHTMLProps<
				HTMLAttributes<HTMLParagraphElement>,
				HTMLParagraphElement
			>
		) => <p style={{ marginTop: 0, marginBottom: '1rem' }} {...props} />,
		pre: (
			props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
		) => <pre style={{ marginTop: 0, marginBottom: '1rem' }} {...props} />,
		details: (
			props: DetailedHTMLProps<
				HTMLAttributes<HTMLDetailsElement>,
				HTMLDetailsElement
			>
		) => <details style={{ cursor: 'pointer' }} {...props} />,
	};
}
