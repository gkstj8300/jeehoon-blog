'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface Options {
  root?: Element | null,
  rootMargin?: string,
  threshold?: number | number[],
  enabled?: boolean,
  pageSize?: number,
}

export function useInfiniteSlice<T>(items: T[], opts: Options = {}) {
  const {
    root = null,
    rootMargin = '200px',
    threshold = 0,
    enabled = true,
    pageSize = 5,
  } = opts;

  const [visibleCount, setVisibleCount] = useState(pageSize);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [items, pageSize]);

  const hasMore = visibleCount < items.length;

  useEffect(() => {
    if (!enabled || !hasMore) return;

    const target = sentinelRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + pageSize, items.length));
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold, pageSize, items.length, hasMore, enabled]);

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );

  return {
    visibleItems,
    hasMore,
    sentinelRef,
    visibleCount,
    setVisibleCount,
  };
}
