import dynamic from "next/dynamic";
import { RefObject, forwardRef, useEffect, useState, CSSProperties } from "react";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { CautionCodeBlock } from './CautionCodeBlock';
import { ListCodeBlock } from "./ListCodeBlock";
import { PointCodeBlock } from "./PointCodeBlock";
import { usePostContent } from "./SkillContent.hook";
import styles from './SkillContent.module.scss';
import { Heading } from '@/components/pages/PostDetail/PostDetail.types';
import { useOnMounted } from "@/hooks/useOnMounted";
import { CustomMarkdownType } from "@/models/pages/slug";
import { useSelector } from "@/store/hooks";
import { selectTheme } from '@/store/modules/common/selectors';
import { markDownContentFormat } from '@/utils/markDown/markDown';

type Props = {
    ref: RefObject<HTMLDivElement>;
    content: string;
    handleGetHeadigs: (headings: Heading[]) => void
};

const DynamicReactMarkdown = dynamic(() => import("react-markdown"), {
    ssr: false,
});

const SyntaxHighlighter = dynamic(
    () => import("react-syntax-highlighter").then(mod => mod.Prism),
    { ssr: false }
);

const loadStyle = async (theme: string): Promise<{ [key: string]: CSSProperties }> => {
    if (theme === 'dark') {
        const mod = await import('react-syntax-highlighter/dist/esm/styles/prism/material-dark');
        return mod.default;
    }
    const mod = await import('react-syntax-highlighter/dist/esm/styles/prism/coy');
    return mod.default;
};

const customCodeBlock = ({ props, style }: CustomMarkdownType) => {
    const { className, children } = props;
    const match = /language-(\w+)/.exec(className || '');

    if (match?.[1] === "point") {
        return <PointCodeBlock content={String(children).replace(/\n$/, '')} />;
    }

    if (match?.[1] === 'list') {
        return <ListCodeBlock props={props} />;
    }

    if (match?.[1] === 'caution') {
        return <CautionCodeBlock content={String(children).replace(/\n$/, '')} />;
    }

    if ((match?.[1] === "javascript" || match?.[1] === "js" || match?.[1] === "ts") && style) {
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

    return <code className={styles.codeBlock}>{children}</code>;
};

export const SkillContent = forwardRef<HTMLDivElement, Props>(
    ({ content, handleGetHeadigs }, ref) => {
        const [style, setStyle] = useState<{ [key: string]: CSSProperties } | null>(null);

        const markDownContent = markDownContentFormat(content);
        const { getPostContentHeadings } = usePostContent({ content });
        const headings = getPostContentHeadings();

        const theme = useSelector(selectTheme);

        const generateHeadingId = (text: string) =>
            text.replace(/\s+/g, "-").toLowerCase();

        useOnMounted(() => handleGetHeadigs(headings));

        useEffect(() => {
            loadStyle(theme).then(setStyle);
        }, [theme]);        

        return (
            <div className={styles.container} ref={ref}>
                <DynamicReactMarkdown
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        code(props) {
                            return customCodeBlock({ props, theme, style });
                        },
                        h1: ({ children, ...props }) => (
                            <h1 id={generateHeadingId(String(children))} style={{ fontSize: "2em" }} {...props}>
                                {children}
                            </h1>
                        ),
                        h2: ({ children, ...props }) => (
                            <h2 id={generateHeadingId(String(children))} style={{ fontSize: "1.75em" }} {...props}>
                                {children}
                            </h2>
                        ),
                        h3: ({ children, ...props }) => (
                            <h3 id={generateHeadingId(String(children))} style={{ fontSize: "1.5em" }} {...props}>
                                {children}
                            </h3>
                        ),
                        h4: (props) => <h4 style={{ fontSize: "1.25em" }} {...props} />,
                        h5: (props) => <h5 style={{ fontSize: "1em" }} {...props} />,
                        p: (props) => <p style={{ marginTop: "0", marginBottom: "1rem" }} {...props} />,
                        pre: (props) => <pre style={{ marginTop: "0", marginBottom: "1rem" }} {...props} />,
                        details: (props) => <details style={{ cursor: "pointer" }} {...props} />,
                    }}
                >
                    {markDownContent}
                </DynamicReactMarkdown>
            </div>
        );
    }
);
SkillContent.displayName = 'SkillContent';