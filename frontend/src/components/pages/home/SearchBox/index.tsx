import { ChangeEvent, useState, useEffect } from 'react';
import styles from './SearchBox.module.scss';
import Title from '@/components/common/Title';
import { SearchType } from '@/components/pages/home/Home.types';

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
			<Title className={styles.title} title="Search" />
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
