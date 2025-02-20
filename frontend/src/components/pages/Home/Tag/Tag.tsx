import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from './Tag.module.scss';
import { TagLink } from '@/components/ui/links/TagLink';
import { Title } from '@/components/ui/title';
import { PostType } from '@/pages/posts/[slug].types';

type Props = {
    postList: PostType[];
}

export const Tag: React.FC<Props> = ({ postList }) => {

    const [tags, setTags] = useState<string[]>();
    const [tagCounts, setTagCounts] = useState<Record<string, number>>();

    useEffect(() => {
        const allTags = postList.flatMap(post => post.tags);
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
                            tagCounts={tagCounts}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

Tag.displayName = 'Tag';