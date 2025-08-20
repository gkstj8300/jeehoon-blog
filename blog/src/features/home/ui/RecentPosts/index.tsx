import Link from 'next/link';
import { useCallback } from 'react';
import styles from './RecentPosts.module.scss';
import { ga } from '@/shared/lib/logs/analytics';
import { PostType } from '@/shared/types/slug';
import { url } from '@/shared/utils/url';

type RecentPostsProps = {
	posts: PostType[];
};

const LAYOUT = 'Home';

export default function RecentPosts({ posts }: RecentPostsProps) {
	const handlePostClick = useCallback((post: PostType) => {
		ga.events.selectPost(post, LAYOUT);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<span className={styles.recentPosts}>
					최신 글
				</span>
				<Link href="/post" className={styles.allPostLink}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#e8eaed"
						className={styles.icon}
					>
						<path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z"></path>
					</svg>
					전체 보기
				</Link>
			</div>
			<div className={styles.body}>
				{posts.map(post => (
					<Link
						href={url.postDetail(post.slug)}
						key={post.title}
						className={styles.post}
						onClick={() => handlePostClick(post)}
					>
						<span className={styles.tag}>{post.mainTag}</span>
						<div className={styles.title} title={post.title}>
							{post.title}
						</div>
						<div className={styles.place}></div>
						<div className={styles.date}>
							<span>
								{post.regDate}
							</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
RecentPosts.displayName = 'RecentPosts';
