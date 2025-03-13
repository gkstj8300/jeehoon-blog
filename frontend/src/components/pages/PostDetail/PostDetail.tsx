import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import { Meta } from "./Meta";
import { PostContent } from './PostContent';
import styles from './PostDetail.module.scss';
import { PostInfo } from './PostInfo';
import { PostTitle } from './PostTitle';
import { TableOfContents } from "./TableOfContents";
import { Heading } from '@/components/pages/PostDetail/PostDetail.types';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';

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
    const [headings, setHeadings] = useState<Heading[]>();
    const tableListRef = useRef<HTMLDivElement>(null);

    const handleGetHeadigs = (headings: Heading[]) => {
        setHeadings(headings);
    }

    return (
        <>
            <Meta
                slug={slug}
                title={title}
                description={description}
                mainTag={mainTag}
                tags={tags}
                thumbnailImage={thumbnailImage}
            />
            <Breadcrumbs
                className={styles.breadcrumb}
                breadcrumbList={[{
                    text: title,
                    strong: true,
                }]}
            />
            <div className={styles.container}>
                <div className={styles.detailWrap}>
                    {thumbnailImage && (
                        <div className={styles.thumbnail}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={thumbnailImage} alt={`${thumbnailImage}`} />
                        </div>
                    )}
                    <PostTitle title={title} />
                    <PostInfo 
                        regDate={regDate} 
                        tags={tags} 
                    />
                    <PostContent 
                        ref={tableListRef}
                        content={content} 
                        handleGetHeadigs={handleGetHeadigs}
                    />
                    <PostComents />
                </div>
                {headings && (
                    <div className={styles.sideWrap}>
                        <TableOfContents headings={headings} tableListRef={tableListRef}/>
                    </div>
                )}
            </div>
        </>
    )
}