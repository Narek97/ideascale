import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { $apiClient } from '@/api';
import { IdeaType } from '@/utils/ts/types/idea';

export const GET_IDEAS = 'GET_IDEAS';

const PER_SIZE = 30;

export const useIdeas = (
  apiToken: string,
  campaignIds: Array<string>,
  query: string,
  type: 'hot' | 'recent' = 'recent',
) =>
  useInfiniteQuery({
    queryKey: [GET_IDEAS, apiToken, type, campaignIds, query],
    enabled: !!apiToken && campaignIds.length > 0, // Only fetch if apiToken and campaignIds are truthy
    queryFn: ({ pageParam = 0 }) =>
      $apiClient.get<Array<IdeaType>>(`/idea/ideas`, {
        params: {
          api_token: apiToken,
          pageNumber: pageParam,
          pageSize: PER_SIZE,
          campaignIds: campaignIds.join(','),
          type,
          query,
        },
      }),
    initialPageParam: 0,
    retry: false,
    getNextPageParam: (lastPage, pages) =>
      lastPage?.data.length < PER_SIZE ? undefined : pages.length,
  });

export const GET_IDEA = 'GET_IDEA';
export const useIdea = (apiToken: string, id: number) =>
  useQuery({
    queryKey: [GET_IDEA, apiToken],
    queryFn: () =>
      $apiClient.get<IdeaType>(`/idea/${id}`, {
        params: { api_token: apiToken },
      }),
    select: data => data.data,
    staleTime: 0,
  });
