'use client';

import React from 'react';

import { Button, Text } from '@fluentui/react-components';
import * as microsoftTeams from '@microsoft/teams-js';

import { useStyles } from '@/app/(guest)/login/style';
import { useAuthState } from '@/providers/AuthProvider';

import IdeaScaleIcon from '@/public/idea-scale.svg';

const LoginPage = () => {
  const { setAccessToken, setRefreshToken, setWorkspaceUrl } = useAuthState();

  const classes = useStyles();

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
    <section className={classes.login}>
      <div className={classes.loginCard}>
        <Text className={classes.title}>Connect Your Workspace</Text>
        <Button appearance="primary" onClick={Login}>
          Visit Workspace
        </Button>
      </div>

      <IdeaScaleIcon className={classes.leftTop} />
      <IdeaScaleIcon width="296px" height="295px" className={classes.rightBottom} />
    </section>
  );
};

export default LoginPage;
