import { RiMenu4Fill } from "@react-icons/all-files/ri/RiMenu4Fill";
import { useState, useRef } from "react";
import { SkillContent } from './SkillContent';
import styles from './SkillDetail.module.scss';
import { SkillInfo } from './SkillInfo';
import { SkillTitle } from './SkillTitle';
import { TableOfContents } from "./TableOfContents";
import { HEADER_WRAPPER_ID } from "@/components/layout/header/Header";
import { Heading } from '@/components/pages/SkillDetail/SkillDetail.types';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';
import { useOnMounted } from '@/hooks/useOnMounted';
import { ga } from '@/logs/analytics';
import { getHeight } from "@/utils/dom";

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

export const SkillDetail: React.FC<Props> = ({
    title,
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
                    <SkillTitle title={title} />
                    <SkillInfo 
                        regDate={regDate} 
                        tags={tags} 
                    />
                    <SkillContent 
                        ref={tableListRef}
                        content={content} 
                        handleGetHeadigs={handleGetHeadigs}
                    />
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