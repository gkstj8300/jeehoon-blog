'use client';

import { url } from '@jeehoon/utils';
import Link from 'next/link';
import { useState, useMemo, useCallback } from 'react';
import styles from './PostListPage.module.scss';
import PostContent from '@/entities/post/ui/PostContent';
import PostInfo from '@/entities/post/ui/PostInfo';
import PostSearch from '@/entities/post/ui/PostSearch';
import PostTitle from '@/entities/post/ui/PostTitle';
import { useInfiniteSlice } from '@/shared/hooks/useInfiniteSlice';
import { useOnMounted } from '@/shared/hooks/useOnMounted';
import { ga } from '@/shared/lib/logs/analytics';
import { PostType } from '@/shared/types/slug';
import Breadcrumbs from '@/shared/ui/Breadcrumbs';

interface PostListPageProps {
  postList: PostType[];
}

const LAYOUT = 'PostList';
const PAGE_SIZE = 5;

export default function PostListPage({ postList }: PostListPageProps) {
  const [filtered, setFiltered] = useState<PostType[]>(postList);

  const { visibleItems, hasMore, sentinelRef } = useInfiniteSlice(filtered, {
    pageSize: PAGE_SIZE,
    rootMargin: '200px',
    threshold: 0,
  });

  const filterPosts = useCallback((next: PostType[]) => {
    setFiltered(next);
  }, []);

  const handlePostClick = useCallback((post: PostType) => {
    ga.events.selectPost(post, LAYOUT);
  }, []);

  const renderedPostList = useMemo(
    () =>
      visibleItems.map((post) => (
        <div key={post.slug} className={styles.post}>
          <div className={styles.postWrap}>
            <PostTitle title={post.title} />
            <PostInfo regDate={post.regDate} tags={post.tags} />
            <PostContent content={post.content} />
          </div>
          <div className={styles.detailButton}>
            <div className={styles.overlay} />
            <Link
              className={styles.button}
              href={url.postDetail(post.slug)}
              onPointerDown={() => handlePostClick(post)}
              aria-label={`게시글 상세 보기: ${post.title}`}
            >
              상세보기
            </Link>
          </div>
        </div>
      )),
    [visibleItems, handlePostClick]
  );

  useOnMounted(ga.pageView.postList);

  return (
    <>
      <Breadcrumbs
        className={styles.breadcrumb}
        breadcrumbList={[{ text: '전체글', strong: true }]}
      />
      <div className={styles.container}>
        <div className={styles.searchWrap}>
          <PostSearch postList={postList} filterPosts={filterPosts} />
        </div>

        <div className={styles.postListWrap}>
          {renderedPostList}
          {hasMore && <div ref={sentinelRef} style={{ height: 1 }} />}
        </div>
      </div>
    </>
  );
}
PostListPage.displayName = 'PostListPage';
