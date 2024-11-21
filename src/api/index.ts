import axios from 'axios';

import { authRef } from '@/providers/AuthProvider';

export const $apiClient = axios.create({
  baseURL: 'https://a717-130-193-123-98.ngrok-free.app/api',
});

$apiClient.interceptors.request.use(
  async function (config) {
    if (config.headers) {
      const token = JSON.parse(localStorage.getItem('accessToken') || '');
      const workspaceUrl = JSON.parse(localStorage.getItem('workspaceUrl') || '');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers['x-workspace'] = workspaceUrl;
      }
    }
    return config;
  },
  function (error) {
    console.warn('Errrr request', error);
    //TODO handle some errors
    return Promise.reject(error);
  },
);

$apiClient.interceptors.response.use(
  async function (config: any) {
    if (config.headers) {
      const token = JSON.parse(localStorage.getItem('accessToken') || '');
      const workspaceUrl = JSON.parse(localStorage.getItem('workspaceUrl') || '');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers['x-workspace'] = workspaceUrl;
      }
    }
    return config;
  },
  function (error) {
    console.warn('Errrr response', error);
    //TODO handle some errors
    return Promise.reject(error);
  },
);

$apiClient.interceptors.response.use(
  res => res,
  async error => {
    // console.log(error.response);
    if (error.response.status === 401 || error.response.data.key === 'INVALID_GLOBAL_OAUTH_TOKEN') {
      $apiClient
        .get('/auth/refresh-token', {
          params: {
            refreshToken: JSON.parse(localStorage.getItem('refreshToken') || ''),
          },
        })
        .then(res => {
          authRef.current?.setAccessToken(res.data.access_token);
          authRef.current?.setRefreshToken(res.data.refresh_token);
          authRef.current?.setWorkspaceUrl(res.data.workspaceUrl);
        });
      console.log('Error new', error.response.status);
    }
  },
);
