'use client';

import { useBreakpoint, useOnMounted } from '@jeehoon/hooks';
import Post from '../Post';
import RecentPosts from '../RecentPosts';
import SearchBox from '../SearchBox';
import Tag from '../Tag';
import styles from './BlogHomePage.module.scss';
import { useHome } from '@/features/blogHome/hooks';
import { ga } from '@/shared/lib/logs/analytics';
import { PostType } from '@/shared/types/slug';

const BREAKPOINT = 1024;

interface BlogHomePageProps {
	postList: PostType[];
	className?: string;
}

export default function BlogHomePage({ postList }: BlogHomePageProps) {
	const { posts, search, recentPosts, handleFindPosts } = useHome(postList);
	const isNarrow = useBreakpoint(BREAKPOINT);
	useOnMounted(ga.pageView.home);

	return (
		<div>
			<div className={styles.home}>
				{isNarrow && (
					<div className={styles.rcontainer}>
						<Tag
							postList={postList}
							search={search}
							handleFindPosts={handleFindPosts}
						/>
					</div>
				)}
				<div className={styles.mainContainer}>
					<RecentPosts posts={recentPosts} />
					<SearchBox handleFindPosts={handleFindPosts} />
				</div>
				{!isNarrow && (
					<div className={styles.rcontainer}>
						<Tag
							postList={postList}
							search={search}
							handleFindPosts={handleFindPosts}
						/>
					</div>
				)}
			</div>
			<Post postList={posts} />
		</div>
	);
}
BlogHomePage.displayName = 'HomePage';
