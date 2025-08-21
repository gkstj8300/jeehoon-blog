'use client';

import Post from '../Post';
import Profile from '../Profile';
import RecentPosts from '../RecentPosts';
import SearchBox from '../SearchBox';
import Tag from '../Tag';
import styles from './HomePage.module.scss';
import { useHome } from '@/features/home/hooks';
import { useBreakpoint } from '@/shared/hooks/useBreakpoint';
import { useOnMounted } from '@/shared/hooks/useOnMounted';
import { ga } from '@/shared/lib/logs/analytics';
import { PostType } from '@/shared/types/slug';
import Breadcrumbs from '@/shared/ui/Breadcrumbs';

const BREAKPOINT = 1024;

interface HomePageProps {
	postList: PostType[];
	className?: string;
}

export default function HomePage({ postList }: HomePageProps) {
	const { posts, search, recentPosts, handleFindPosts } = useHome(postList);
	const isNarrow = useBreakpoint(BREAKPOINT);
	useOnMounted(ga.pageView.home);

	return (
		<>
			<Breadcrumbs breadcrumbList={[]} />
			<div>
				<div className={styles.home}>
					<div className={styles.lcontainer}>
						<Profile />
					</div>
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
		</>
	);
}
HomePage.displayName = 'HomePage';
