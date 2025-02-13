import styles from './PostDetail.module.scss';
import { PostTitle } from './PostTitle';
import { PostInfo } from './PostInfo';
import { PostContent } from './PostContent';

type Props = {
    slug: string;
    title: string,
    description: string,
    thumbnailImage: string,
    mainTag: string,
    regDate: string,
    tags: string[],
    content: string,
}

export const PostDetail: React.FC<Props> = ({
    slug,
    title,
    description,
    regDate,
    mainTag,
    tags,
    content,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.detailWrap}>
                <PostTitle title={title} />
                <PostInfo 
                    regDate={regDate} 
                    tags={tags} 
                    mainTag={mainTag} 
                />
                <PostContent content={content} />
            </div>
        </div>
    )
}