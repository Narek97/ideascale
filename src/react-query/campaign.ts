import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { $apiClient } from '@/api';
import { CampaignType } from '@/utils/ts/types/campaign';
import { IdeaType } from '@/utils/ts/types/idea';

const GET_CAMPAIGNS = 'GET_CAMPAIGNS';

export const useCampaigns = (apiToken: string) =>
  useQuery({
    queryKey: [GET_CAMPAIGNS, apiToken],
    queryFn: () =>
      $apiClient.get<Array<CampaignType>>('/campaign/campaigns', {
        params: { api_token: apiToken },
      }),
    enabled: !!apiToken, // Only fetch if apiToken is truthy
    select: data => data.data,
  });

const GET_CAMPAIGN = 'GET_CAMPAIGN';

export const useCampaign = (id: string, apiToken: string) =>
  useQuery({
    queryKey: [GET_CAMPAIGN, id, apiToken],
    queryFn: () =>
      $apiClient.get<CampaignType>(`/campaign/${id}`, {
        params: { api_token: apiToken },
      }),
    select: data => data.data,
  });

const GET_CAMPAIGN_IDEAS = 'GET_CAMPAIGN_IDEAS';
const PER_SIZE = 30;

export const useCampaignIdeas = (id: string, apiToken: string, type: 'hot' | 'recent' = 'recent') =>
  useInfiniteQuery({
    queryKey: [GET_CAMPAIGN_IDEAS, id, apiToken, type],
    queryFn: ({ pageParam = 0 }) =>
      $apiClient.get<Array<IdeaType>>(`/campaign/${id}/ideas`, {
        params: { api_token: apiToken, pageNumber: pageParam, pageSize: PER_SIZE, type },
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.data?.length < PER_SIZE ? undefined : pages.length,
  });
