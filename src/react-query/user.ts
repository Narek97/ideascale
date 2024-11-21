import { useQuery } from '@tanstack/react-query';

import { $apiClient } from '@/api';
import { UserType } from '@/utils/ts/types/user';

const GET_ME = 'GET_ME';

export const useGetMe = (enabled?: boolean) => {
  return useQuery({
    queryKey: [GET_ME],
    queryFn: () => $apiClient.get<UserType>('/user/me'),
    select: data => data.data,
    enabled: !!enabled,
  });
};
