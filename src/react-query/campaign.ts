import { useQuery } from '@tanstack/react-query';

import { $apiClient } from '@/api';
import { CampaignType } from '@/utils/ts/types/campaign';

export const GET_CAMPAIGNS = 'GET_CAMPAIGNS';

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
