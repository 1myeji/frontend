import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { getJobPostsList, getJobPostsSearch } from '@/api/applicantApi';
import { useEffect, useRef } from 'react';
import { throttle } from 'lodash';

export const useJobSearchInfinite = (type: string, keyword: string | null) => {
  const queryClient = useQueryClient();
  const previousKeywordRef = useRef(keyword);

  const fetchJobPosts = async ({ pageParam = 0 }) => {
    if (type !== '전체' && keyword) {
      return getJobPostsSearch(type, keyword, pageParam);
    } else if (type === '전체') {
      return getJobPostsList(pageParam);
    }
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    type === '전체' ? ['jobPostsList'] : ['jobPostsList', type, keyword],
    fetchJobPosts,
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage?.last) {
          return allPages.length;
        }
        return undefined;
      },
    },
  );

  useEffect(() => {
    if (previousKeywordRef.current !== keyword) {
      queryClient.cancelQueries(['jobPostsList', type, previousKeywordRef.current]);
      queryClient.removeQueries(['jobPostsList', type, previousKeywordRef.current]);
      window.scrollTo(0, 0);
      previousKeywordRef.current = keyword;
    }
  }, [keyword]);

  useEffect(() => {
    const handleScroll = throttle(async () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      const isBottom = scrollTop + clientHeight >= scrollHeight - 10;
      if (isBottom && !isFetchingNextPage && hasNextPage) {
        await fetchNextPage();
      }
    }, 500);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return [data];
};
