import { useState, useCallback, useEffect, useMemo } from 'react';
import { SearchType } from '../types/Home.types';
import { PostType } from '@/shared/types/slug';

export function useHome(postList: PostType[]) {
  const [posts, setPosts] = useState<PostType[]>(postList);
  const [search, setSearch] = useState<SearchType>({ tag: '' });

  const recentPosts = useMemo(
    () =>
      postList
        .sort(
          (a, b) =>
            new Date(b.regDate).getTime() - new Date(a.regDate).getTime()
        )
        .slice(0, 5),
    [postList]
  );

  const handleFindPosts = useCallback((search: SearchType) => {
    setSearch(prev => ({
      ...prev,
      ...search,
    }));
  }, []);

  useEffect(() => {
    let filteredPosts = [...postList];

    if (!search) {
      return;
    }

    if (search.keyword) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(search.keyword!.toLowerCase())
      );
    }

    if (search.tag) {
      filteredPosts = filteredPosts.filter(post => post.mainTag === search.tag);
    }

    setPosts(filteredPosts);
  }, [search, postList]);

  return {
    posts,
    search,
    recentPosts,
    handleFindPosts,
  };
}
