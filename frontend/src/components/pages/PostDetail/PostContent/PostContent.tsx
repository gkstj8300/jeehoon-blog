import dynamic from "next/dynamic";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { usePostContent } from "./PostContent.hook";
import styles from './PostContent.module.scss';
import { TableOfContents } from "./TableOfContents";
import { markDownContentFormat } from '@/utils/markDown/markDown';

type Props = {
    content: string;
    thumbnailImage?: string;
}

const DynamicReactMarkdown = dynamic(() => import("react-markdown"), {
    ssr: false,
});

export const PostContent: React.FC<Props> = ({ 
    content,
    thumbnailImage
}) => {
    const markDownContent = markDownContentFormat(content);
    const { getPostContentHeadings } = usePostContent({ content });
    const headings = getPostContentHeadings();

    return (
        <div className={styles.container}>
            {thumbnailImage && (
                <div className={styles.thumbnail}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={thumbnailImage} alt={`${thumbnailImage}`} />
                </div>
            )}
            <TableOfContents headings={headings} />
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
                    details: ({ ...props }) => <details style={{ cursor: "pointer" }} {...props} />,
                }}
            >
                {markDownContent}
            </DynamicReactMarkdown>
        </div>
    );
};
PostContent.displayName = 'PostContent';