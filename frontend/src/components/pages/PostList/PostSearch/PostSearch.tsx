import { ChangeEvent, useState, useCallback, useMemo, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import styles from './PostSearch.module.scss';
import { TagLink } from '@/components/ui/links/TagLink';
import { Title } from '@/components/ui/title';
import { PostType } from "@/models/pages/slug";

type Props = {
    postList: PostType[];
    filterPosts: (posts: PostType[]) => void;
};

type SearchType = {
    keyword: string;
    tag: string;
};

export const PostSearch: React.FC<Props> = ({ postList, filterPosts }) => {
    const [search, setSearch] = useState<SearchType>({ keyword: '', tag: '' });

    const tags = useMemo(() => {
        return [...new Set(postList.flatMap(post => post.mainTag))];
    }, [postList]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(prev => ({ ...prev, keyword: value }));
    };

    const handleClickTag = useCallback((tag: string) => {
        setSearch(prev => ({ ...prev, tag }));
    }, []);

    const handleClickSearch = useCallback(() => {
        let filteredPosts = [...postList];

        if (search.keyword) {
            filteredPosts = filteredPosts.filter(post => 
                post.title.toLowerCase().includes(search.keyword.toLowerCase())
            );
        }

        filterPosts(filteredPosts);
    }, [postList, search.keyword, filterPosts]);

    useEffect(() => {
        let filteredPosts = [...postList];

        if (search.tag) {
            filteredPosts = filteredPosts.filter(post => post.mainTag === search.tag);
        }

        filterPosts(filteredPosts);
    }, [search.tag, postList, filterPosts]);

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Title className={styles.searchTitle} title="Search" />
                <input
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
PostSearch.displayName = 'PostSearch';
