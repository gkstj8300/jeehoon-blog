import dynamic from "next/dynamic";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, coy } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { usePostContent } from "./PostContent.hook";
import styles from './PostContent.module.scss';
import { TableOfContents } from "./TableOfContents";
import { useSelector } from "@/store/hooks";
import { selectTheme } from '@/store/modules/common/selectors';
import { markDownContentFormat } from '@/utils/markDown/markDown';

type Props = {
    content: string;
}

const DynamicReactMarkdown = dynamic(() => import("react-markdown"), {
    ssr: false,
});

export const PostContent: React.FC<Props> = ({ content }) => {
    const markDownContent = markDownContentFormat(content);
    const { getPostContentHeadings } = usePostContent({ content });
    const headings = getPostContentHeadings();

    const theme = useSelector(selectTheme);

    return (
        <div className={styles.container}>
            {headings.length > 0 && <TableOfContents headings={headings} />}
            <DynamicReactMarkdown 
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code(props) {
                        const { className, children } = props;
                        const match = /language-(\w+)/.exec(className || '');

                        if (match?.[1] === "javascript" || match?.[1] === "js" || match?.[1] === "ts") {
                            return (
                                <SyntaxHighlighter
                                    className={styles.scriptBlock}
                                    style={theme === 'dark' ? materialDark : coy}
                                    language="javascript"
                                    PreTag="div"
                                    showLineNumbers
                                    wrapLines
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            );
                        }
                        return (
                            <div className={styles.codeBlock}>
                                <code {...props}>{children}</code>
                            </div>
                        );
                    },
                    h1: ({ children, ...props }) => {
                        const id = String(children).replace(/\s+/g, "-").toLowerCase();
                        return <h1 id={id} style={{ fontSize: "2em" }} {...props}>{children}</h1>;
                    },
                    h2: ({ children, ...props }) => {
                        const id = String(children).replace(/\s+/g, "-").toLowerCase();
                        return <h2 id={id} style={{ fontSize: "1.75em" }} {...props}>{children}</h2>;
                    },
                    h3: ({ children, ...props }) => {
                        const id = String(children).replace(/\s+/g, "-").toLowerCase();
                        return <h3 id={id} style={{ fontSize: "1.5em" }} {...props}>{children}</h3>;
                    },
                    h4: ({ ...props }) => <h4 style={{ fontSize: "1.25em" }} {...props} />,
                    h5: ({ ...props }) => <h5 style={{ fontSize: "1em" }} {...props} />,
                    h6: ({ ...props }) => <h5 style={{ fontSize: "1em" }} {...props} />,
                    p: ({ ...props }) => <p style={{ marginTop: "0", marginBottom: "1rem" }} {...props} />,
                    pre: ({ ...props }) => <pre style={{ marginTop: "0", marginBottom: "1rem" }} {...props} />,
                    details: ({ ...props }) => <details style={{ cursor: "pointer" }} {...props} />,
                }}
            >
                {markDownContent}
            </DynamicReactMarkdown>
        </div>
    );
};
PostContent.displayName = 'PostContent';