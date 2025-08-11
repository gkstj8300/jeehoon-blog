import { useCallback } from 'react';
import styles from './Post.module.scss';
import PostItem from './PostItem';
import { ga } from '@/lib/logs/analytics';
import { PostType } from '@/types/slug';

interface PostProps {
	postList: PostType[];
}

const LAYOUT = 'Home';

export default function Post({ postList }: PostProps) {
	const handlePostClick = useCallback((post: PostType) => {
		ga.events.selectPost(post, LAYOUT);
	}, []);

	return (
		<div className={styles.container}>
			{postList.map((post, idx) => (
				<PostItem key={idx} post={post} handlePostClick={handlePostClick} />
			))}
		</div>
	);
}
Post.displayName = 'Post';
