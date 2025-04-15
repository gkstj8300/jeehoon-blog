import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Meta } from "./Meta";
import { PostContent } from './PostContent';
import styles from './PostDetail.module.scss';
import { PostInfo } from './PostInfo';
import { PostTitle } from './PostTitle';
import { TableOfContents } from "./TableOfContents";
import { HEADER_WRAPPER_ID } from "@/components/layout/header/Header";
import { Heading } from '@/components/pages/PostDetail/PostDetail.types';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';
import { useOnMounted } from '@/hooks/useOnMounted';
import { ga } from '@/logs/analytics';
import { getHeight } from "@/utils/dom";

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
    const [isAside, setIsAside] = useState<boolean>(false);

    const tableListRef = useRef<HTMLDivElement>(null);

    const headerHeight = getHeight(`#${HEADER_WRAPPER_ID}`) ?? 0;

    const handleGetHeadigs = (headings: Heading[]) => {
        setHeadings(headings);
    };

    const handleClickAsideOpen = () => {
        setIsAside((prev) => !prev);
    };

    useOnMounted(() => {
        ga.pageView.postDetail({
            title,
            regDate,
            mainTag,
        });
    });

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
                {headings && headings.length > 0 && (
                    <div 
                        className={styles.sideWrap}
                        style={{
                            top: headerHeight + 4
                        }}
                    >
                        <div 
                            className={styles.asideButton} 
                            onClick={handleClickAsideOpen}
                        >
                            <RiMenu4Fill className={styles.sideMenuIcon} />
                        </div>
                        <TableOfContents
                            headings={headings} 
                            tableListRef={tableListRef}
                            isAside={isAside}
                        />
                    </div>
                )}
            </div>
        </>
    )
}