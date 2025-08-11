'use client';

import { RiMenu4Fill } from '@react-icons/all-files/ri/RiMenu4Fill';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Meta from './Meta';
import styles from './PostDetail.module.scss';
import { Heading } from './PostDetail.types';
import TableOfContents from './TableOfContents';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PostContent from '@/components/common/PostContent';
import PostInfo from '@/components/common/PostInfo';
import PostTitle from '@/components/common/PostTitle';
import { HEADER_WRAPPER_ID } from '@/components/layout/Header';
import { useOnMounted } from '@/hooks/useOnMounted';
import { ga } from '@/lib/logs/analytics';
import { getHeight } from '@/utils/dom';

const PostComents = dynamic(
	() => import('@/components/pages/postDetail/PostComents'),
	{
		ssr: false,
		loading: () => <div style={{ minHeight: '200px' }} />,
	}
);

interface PostDetailProps {
	slug: string;
	title: string;
	description: string;
	thumbnailImage: string;
	mainTag: string;
	regDate: string;
	tags: string[];
	content: string;
}

export default function PostDetailPage({
	slug,
	title,
	description,
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
		<>
			<Meta
				slug={slug}
				title={title}
				description={description}
				mainTag={mainTag}
				tags={tags}
				thumbnailImage={thumbnailImage}
			/>
			<Breadcrumbs
				className={styles.breadcrumb}
				breadcrumbList={[
					{
						text: title,
						strong: true,
					},
				]}
			/>
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
							<RiMenu4Fill className={styles.sideMenuIcon} />
						</div>
						<TableOfContents
							headings={headings}
							tableListRef={tableListRef}
							isAside={isAside}
						/>
					</div>
				)}
			</div>
		</>
	);
}
PostDetailPage.displayName = 'PostDetailPage';
