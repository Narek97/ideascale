import { useMutation, useQuery } from '@tanstack/react-query';
import { $apiClient } from '@/api';
import { CommentType } from '@/utils/ts/types/comment';

export const GET_COMMENTS = 'GET_COMMENTS';

export const useComments = (apiToken: string, id: number) =>
  useQuery({
    queryKey: [GET_COMMENTS, apiToken, id],
    queryFn: () =>
      $apiClient.get<Array<CommentType>>(`idea/${id}/comments`, {
        params: { api_token: apiToken },
      }),
    select: data => {
      return data.data || [];
    },
  });

export const useComment = (apiToken: string, id: number) =>
  useMutation({
    mutationFn: (body: { content: string }) =>
      $apiClient.post<CommentType>(`idea/${id}/comment`, body, {
        params: { api_token: apiToken },
      }),
    onSuccess: data => {
      return data.data;
    },
  });
