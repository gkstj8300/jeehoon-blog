import styles from './PostContent.module.scss';
import { markDownContentFormat } from '@/utils/markDown/markDown';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
    content: string;
}

export const PostContent: React.FC<Props> = ({ content }) => {
    const markDownContent = markDownContentFormat(content);
    return (
        <div className={styles.container}>
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
            >
                {markDownContent}
            </ReactMarkdown>
        </div>
    );
};
PostContent.displayName = 'PostContent';