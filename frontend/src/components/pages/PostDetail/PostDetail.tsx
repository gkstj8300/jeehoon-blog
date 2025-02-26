import dynamic from "next/dynamic";
import { Meta } from "./Meta";
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
    title: string;
    description: string;
    thumbnailImage: string;
    mainTag: string;
    regDate: string;
    tags: string[];
    content: string;
}

export const PostDetail: React.FC<Props> = ({
    slug,
    title,
    description,
    thumbnailImage,
    regDate,
    mainTag,
    tags,
    content,
}) => {
    return (
        <div className={styles.container}>
            <Meta
                slug={slug}
                title={title}
                description={description}
                mainTag={mainTag}
                tags={tags}
                thumbnailImage={thumbnailImage}
            />
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