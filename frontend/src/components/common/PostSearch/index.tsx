import { IoSearchOutline } from '@react-icons/all-files/io5/IoSearchOutline';
import { ChangeEvent, useState, useCallback, useMemo, useEffect } from 'react';
import styles from './PostSearch.module.scss';
import TagLink from '@/components/common/TagLink';
import Title from '@/components/common/Title';
import { PostType } from '@/types/slug';

interface PostSearchProps {
	postList: PostType[];
	filterPosts: (posts: PostType[]) => void;
}

interface SearchType {
	keyword: string;
	tag: string;
}

export default function PostSearch({ postList, filterPosts }: PostSearchProps) {
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
				<div className={styles.tag} onClick={() => handleClickTag('')}>
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
}
PostSearch.displayName = 'PostSearch';
