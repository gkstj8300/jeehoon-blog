import { useState, useEffect, useCallback, MouseEvent } from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from './Tag.module.scss';
import { SearchType } from "@/components/pages/Home/Home.types";
import { TagLink } from '@/components/ui/links/TagLink';
import { Title } from '@/components/ui/title';
import { PostType } from '@/models/pages/slug';

type Props = {
    postList: PostType[];
    search?: SearchType;
    handleFindPosts: (search: SearchType) => void;
}

export const Tag: React.FC<Props> = ({ 
    postList,
    search,
    handleFindPosts,
}) => {
    const [tags, setTags] = useState<string[]>();
    const [tagCounts, setTagCounts] = useState<Record<string, number>>();

    const handleClickFindPost = useCallback((e: MouseEvent, tag: string) => {
        e.preventDefault();
        if(search?.tag === tag) {
            handleFindPosts({ tag: '' });
            return;
        }
        handleFindPosts({ tag });
    }, [search, handleFindPosts]);

    useEffect(() => {
        const allTags = postList.flatMap(post => post.mainTag);
        setTags([...new Set(allTags)]);

        const counts = allTags.reduce((acc: Record<string, number>, tag: string) => {
            acc[tag] = (acc[tag] || 0) + 1;
            return acc;
        }, {});
        setTagCounts(counts);
    }, [postList]);

    return (
        <div className={styles.container}>
            <Title className={styles.title} title='Tag List'/>
            <div className={styles.link}>
                {tags?.map((tag, index) => (
                    <div key={index} className={styles.tagWrap}>
                        <IoIosArrowBack className={styles.icon}/>
                        <TagLink
                            href='#'
                            name={tag}
                            bold={search?.tag === tag}
                            tagCounts={tagCounts}
                            onClick={(e) => handleClickFindPost(e, tag)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

Tag.displayName = 'Tag';