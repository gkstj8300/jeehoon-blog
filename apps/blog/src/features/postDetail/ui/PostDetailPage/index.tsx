'use client';

import { useOnMounted } from '@jeehoon/hooks';
import { Icons } from '@jeehoon/ui';
import { getHeight } from '@jeehoon/utils';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState, useRef } from 'react';
import TableOfContents from '../TableOfContents';
import styles from './PostDetailPage.module.scss';
import PostContent from '@/entities/post/ui/PostContent';
import PostInfo from '@/entities/post/ui/PostInfo';
import PostTitle from '@/entities/post/ui/PostTitle';
import { Heading } from '@/features/postDetail/types';
import { ga } from '@/shared/lib/logs/analytics';

const HEADER_WRAPPER_ID = 'header-wrapper';

const PostComents = dynamic(
	() => import('@/features/postDetail/ui/PostComents'),
	{
		ssr: false,
		loading: () => <div style={{ minHeight: '200px' }} />,
	}
);

interface PostDetailProps {
	title: string;
	thumbnailImage: string;
	mainTag: string;
	regDate: string;
	tags: string[];
	content: string;
}

export default function PostDetailPage({
	title,
	thumbnailImage,
	regDate,
	mainTag,
	tags,
	content,
}: PostDetailProps) {
	const [headings, setHeadings] = useState<Heading[]>();
	const [isAside, setIsAside] = useState<boolean>(false);

	const tableListRef = useRef<HTMLDivElement>(null);

	const headerHeight = getHeight(`#${HEADER_WRAPPER_ID}`) ?? 0;

	const handleGetHeadigs = (headings: Heading[]) => {
		setHeadings(headings);
	};

	const handleClickAsideOpen = () => {
		setIsAside(prev => !prev);
	};

	useOnMounted(() => {
		ga.pageView.postDetail({
			title,
			regDate,
			mainTag,
		});
	});

	return (
		<div className={styles.container}>
			<div className={styles.detailWrap}>
				{thumbnailImage && (
					<div className={styles.thumbnail}>
						<Image
							src={thumbnailImage}
							alt={`${thumbnailImage}`}
							width={768}
							height={400}
							priority
						/>
					</div>
				)}
				<PostTitle title={title} />
				<PostInfo regDate={regDate} tags={tags} />
				<PostContent
					ref={tableListRef}
					content={content}
					handleGetHeadigs={handleGetHeadigs}
				/>
				<PostComents />
			</div>
			{headings && headings.length > 0 && (
				<div
					className={styles.sideWrap}
					style={{
						top: headerHeight + 4,
					}}
				>
					<div className={styles.asideButton} onClick={handleClickAsideOpen}>
						<Icons.RiMenu4Fill className={styles.sideMenuIcon} />
					</div>
					<TableOfContents
						headings={headings}
						tableListRef={tableListRef}
						isAside={isAside}
					/>
				</div>
			)}
		</div>
	);
}
PostDetailPage.displayName = 'PostDetailPage';
