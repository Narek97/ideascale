'use client';

import React from 'react';

import { Button } from '@fluentui/react-button';
import * as microsoftTeams from '@microsoft/teams-js';

import { useAuthState } from '@/providers/AuthProvider';

const Login = () => {
  const { setAccessToken, setRefreshToken, setWorkspaceUrl } = useAuthState();

  const Login = () => {
    microsoftTeams.authentication
      .authenticate({
        url: `https://app.ideascale.com/a/global-oauth2/authorize?client_id=b0a59801-0a04-446e-9837-b812ce5d73b8&redirect_uri=${window.location.origin}/auth/callback&response_type=code`,
      })
      .then((data: any) => {
        setAccessToken(data.access_token);
        setRefreshToken(data.refresh_token);
        setWorkspaceUrl(data.workspaceUrl);
      });
  };

  return (
    <div>
      Login
      <button onClick={Login}>Click</button>
      <Button appearance="primary">Login</Button>
    </div>
  );
};

export default Login;
