import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, coy } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { CautionCodeBlock } from './CautionCodeBlock';
import { ListCodeBlock } from "./ListCodeBlock";
import { PointCodeBlock } from "./PointCodeBlock";
import styles from './SkillContent.module.scss';
import { CustomMarkdownType } from "@/models/pages/slug";
import { useSelector } from "@/store/hooks";
import { selectTheme } from '@/store/modules/common/selectors';
import { markDownContentFormat } from '@/utils/markDown/markDown';

type Props = {
    content: string;
};

const DynamicReactMarkdown = dynamic(() => import("react-markdown"), {
    ssr: false,
});

const customCodeBlock = ({ props, theme }: CustomMarkdownType) => {
    const { className, children } = props;
    const match = /language-(\w+)/.exec(className || '');

    if (match?.[1] === "javascript" || match?.[1] === "js" || match?.[1] === "ts") {
        return (
            <SyntaxHighlighter
                className={styles.scriptBlock}
                style={theme === 'dark' ? materialDark : coy}
                language="javascript"
                PreTag="pre"
                showLineNumbers
                wrapLines
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        );
    }

    if(match?.[1] === "point") {
        return <PointCodeBlock content={String(children).replace(/\n$/, '')}/>
    }

    if(match?.[1] === 'list') {
        return <ListCodeBlock props={props} />
    }

    if(match?.[1] === 'caution') {
        return <CautionCodeBlock content={String(children).replace(/\n$/, '')}/>
    }

    return (
        <code className={styles.codeBlock}>{children}</code>
    );
};

export const SkillContent = forwardRef<HTMLDivElement, Props>(
    ({ content }, ref) => {
        const markDownContent = markDownContentFormat(content);

        const theme = useSelector(selectTheme);

        const generateHeadingId = (text: string) =>
            text.replace(/\s+/g, "-").toLowerCase();

        return (
            <div className={styles.container} ref={ref}>
                <DynamicReactMarkdown
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        code(props) {
                            return customCodeBlock({ props, theme });
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