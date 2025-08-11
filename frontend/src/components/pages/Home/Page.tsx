'use client';

import { useState, useEffect } from 'react';
import { useHome } from './Home.hooks';
import styles from './Home.module.scss';
import Post from './Post';
import Profile from './Profile';
import RecentPosts from './RecentPosts';
import SearchBox from './SearchBox';
import Tag from './Tag';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useOnMounted } from '@/hooks/useOnMounted';
import { ga } from '@/lib/logs/analytics';
import { PostType } from '@/types/slug';

const TEG_INNER_WIDTH = 1024;

type HomePageProps = {
	postList: PostType[];
	className?: string;
};

export default function HomePage({ postList }: HomePageProps) {
	const { posts, search, recentPosts, handleFindPosts } = useHome(postList);

	const [innerWidth, setInnerWidth] = useState<number>(0);

	useEffect(() => {
		const handleResize = () => setInnerWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useOnMounted(ga.pageView.home);

	return (
		<>
			<Breadcrumbs breadcrumbList={[]} />
			<div>
				<div className={styles.home}>
					<div className={styles.lcontainer}>
						<Profile />
					</div>
					{innerWidth < TEG_INNER_WIDTH && (
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
					{innerWidth >= TEG_INNER_WIDTH && (
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
HomePage.displayName = 'Home';
