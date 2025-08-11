import Link from 'next/link';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './RecentPosts.module.scss';
import { ga } from '@/lib/logs/analytics';
import { PostType } from '@/types/slug';
import { url } from '@/utils/url';

type RecentPostsProps = {
	posts: PostType[];
};

const LAYOUT = 'Home';

export default function RecentPosts({ posts }: RecentPostsProps) {
	const { t } = useTranslation();

	const handlePostClick = useCallback((post: PostType) => {
		ga.events.selectPost(post, LAYOUT);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<span className={styles.recentPosts}>
					{t('component.pages.home.recentPosts.recentPost')}
				</span>
				<Link href="/postList" className={styles.allPostLink}>
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
					{t('component.pages.home.recentPosts.allPost')}
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
							<span
								title={t('component.pages.home.recentPosts.allPost', {
									date: post.regDate,
								})}
							>
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
