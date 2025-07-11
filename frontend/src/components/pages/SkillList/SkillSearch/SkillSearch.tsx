import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";
import { ChangeEvent, useState, useCallback, useMemo, useEffect } from 'react';
import styles from './SkillSearch.module.scss';
import { TagLink } from '@/components/ui/links/TagLink';
import { Title } from '@/components/ui/title';
import { SkillType } from "@/models/pages/slug";

type Props = {
    skillList: SkillType[];
    filterPosts: (posts: SkillType[]) => void;
};

type SearchType = {
    keyword: string;
    tag: string;
};

export const SkillSearch: React.FC<Props> = ({ skillList, filterPosts }) => {
    const [search, setSearch] = useState<SearchType>({ keyword: '', tag: '' });

    const tags = useMemo(() => {
        return [...new Set(skillList.flatMap(post => post.mainTag))];
    }, [skillList]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(prev => ({ ...prev, keyword: value }));
    };

    const handleClickTag = useCallback((tag: string) => {
        setSearch(prev => ({ ...prev, tag }));
    }, []);

    const handleClickSearch = useCallback(() => {
        let filteredPosts = [...skillList];

        if (search.keyword) {
            filteredPosts = filteredPosts.filter(post => 
                post.title.toLowerCase().includes(search.keyword.toLowerCase())
            );
        }

        filterPosts(filteredPosts);
    }, [skillList, search.keyword, filterPosts]);

    useEffect(() => {
        let filteredPosts = [...skillList];

        if (search.tag) {
            filteredPosts = filteredPosts.filter(post => post.mainTag === search.tag);
        }

        filterPosts(filteredPosts);
    }, [search.tag, skillList, filterPosts]);

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Title className={styles.searchTitle} title="Search" />
                <input
                    name="keyword"
                    value={search.keyword}
                    className={styles.searchBox}
                    type="text"
                    placeholder="keyword input"
                    onChange={handleChange}
                />
                <IoSearchOutline
                    className={styles.searchIcon}
                    onClick={handleClickSearch}
                />
            </div>
            <div className={styles.tags}>
                <div
                    className={styles.tag}
                    onClick={() => handleClickTag('')}
                >
                    <TagLink href="#" name="X" />
                </div>
                {tags.map(tag => (
                    <div
                        key={tag}
                        className={styles.tag}
                        data-bold={search.tag === tag}
                        onClick={() => handleClickTag(tag)}
                    >
                        <TagLink href="#" name={tag} />
                    </div>
                ))}
            </div>
        </div>
    );
};
SkillSearch.displayName = 'SkillSearch';
