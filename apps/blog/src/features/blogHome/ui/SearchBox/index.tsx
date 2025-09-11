import { ChangeEvent, useState, useEffect } from 'react';
import styles from './SearchBox.module.scss';
import { SearchType } from '@/features/blogHome/types';

interface SearchBoxProps {
	handleFindPosts: (search: SearchType) => void;
}

export default function SearchBox({ handleFindPosts }: SearchBoxProps) {
	const [keyDownValue, setKeyDownValue] = useState('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget;
		setKeyDownValue(value);
	};

	useEffect(() => {
		handleFindPosts({ keyword: keyDownValue });
	}, [keyDownValue, handleFindPosts]);

	return (
		<div className={styles.container}>
			<div className={styles.title}>Search</div>
			<input
				name="keyword"
				value={keyDownValue}
				className={styles.searchBox}
				type="text"
				placeholder="keyword input"
				onChange={handleChange}
			/>
		</div>
	);
}
