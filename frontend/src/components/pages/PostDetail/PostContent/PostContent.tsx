import styles from './PostContent.module.scss';
import { markDownContentFormat } from '@/utils/markDown/markDown';

type Props = {
    content: string;
}

export const PostContent: React.FC<Props> = ({ content }) => {
    const markDownContent = markDownContentFormat(content);
    return (
        <div className={styles.container}>
            {markDownContent}
        </div>
    );
};
PostContent.displayName = 'PostContent';