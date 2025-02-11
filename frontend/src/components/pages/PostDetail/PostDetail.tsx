import styles from './PostDetail.module.scss';
import { PostTitle } from './PostTitle';
import { PostInfo } from './PostInfo';
import { PostContent } from './PostContent';

type Props = {
    slug: string;
    title: string,
    description: string,
    thumbnailImage: string,
    regDate: string,
    tags: string[],
    content: string,
}

export const PostDetail: React.FC<Props> = ({
    slug,
    title,
    description,
    regDate,
    tags,
    content,
}) => {
    return (
        <div className={styles.container}>
            <PostTitle title={title} />
            <PostInfo regDate={regDate} tags={tags} />
            <PostContent content={content} />
        </div>
    )
}