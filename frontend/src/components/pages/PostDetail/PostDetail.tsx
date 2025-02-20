import dynamic from "next/dynamic";
import { PostContent } from './PostContent';
import styles from './PostDetail.module.scss';
import { PostInfo } from './PostInfo';
import { PostTitle } from './PostTitle';

const PostComents = dynamic(
    () => import("@/components/pages/PostDetail/PostComents/PostComents"),
    {
      ssr: false,
    }
);

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
    title,
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
                <PostComents />
            </div>
        </div>
    )
}