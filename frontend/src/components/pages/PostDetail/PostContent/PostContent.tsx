import dynamic from "next/dynamic";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import styles from './PostContent.module.scss';
import { markDownContentFormat } from '@/utils/markDown/markDown';

type Props = {
    content: string;
}

const DynamicReactMarkdown = dynamic(() => import("react-markdown"), {
    ssr: false,
});

export const PostContent: React.FC<Props> = ({ content }) => {
    const markDownContent = markDownContentFormat(content);
    return (
        <div className={styles.container}>
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
                                    style={materialDark}
                                    language="javascript"
                                    PreTag="div"
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            );
                        }
                    
                        if (match?.[1] === "list") {
                            return (
                                <div className={styles.list}>
                                    <h3>목차</h3>
                                    <code {...props}>{children}</code>
                                </div>
                            );
                        }
                        return (
                            <div className={styles.codeBlock}>
                                <code {...props}>{children}</code>
                            </div>
                        );
                    },
                    h1: ({ ...props }) => <h1 style={{ fontSize: "2em" }} {...props} />,
                    h2: ({ ...props }) => <h2 style={{ fontSize: "1.75em" }} {...props} />,
                    h3: ({ ...props }) => <h3 style={{ fontSize: "1.5em" }} {...props} />,
                    h4: ({ ...props }) => <h4 style={{ fontSize: "1.25em" }} {...props} />,
                    h5: ({ ...props }) => <h5 style={{ fontSize: "1em" }} {...props} />,
                    h6: ({ ...props }) => <h5 style={{ fontSize: "1em" }} {...props} />,
                    p: ({ ...props }) => <p style={{ marginTop: "0", marginBottom: "1rem" }} {...props} />,
                    details: ({ ...props }) => <details style={{ cursor: "pointer" }} {...props} />,
                }}
            >
                {markDownContent}
            </DynamicReactMarkdown>
        </div>
    );
};
PostContent.displayName = 'PostContent';