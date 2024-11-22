'use client';
import React, { ReactNode, useEffect, useState } from 'react';

import * as microsoftTeams from '@microsoft/teams-js';

import IdeaScaleIcon from '@/public/idea-scale.svg';

const TeamsProvider = ({ children }: { children: ReactNode }) => {
  const [context, setContext] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if the app is running in Microsoft Teams
    microsoftTeams.app
      .initialize()
      .then(() => {
        microsoftTeams.app
          .getContext()
          .then(ctx => setContext(JSON.stringify(ctx)))
          .catch(err => setError(`Error getting context: ${err.message}`));
      })
      .catch(err => setError(`Error initializing Teams app: ${err.message}`));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!context) {
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <IdeaScaleIcon fill={'#5F5F5F'} />
      </div>
    );
  }

  return <>{children}</>;
};

export default TeamsProvider;
