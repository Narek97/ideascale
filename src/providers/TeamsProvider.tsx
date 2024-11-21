'use client';
import React, { ReactNode, useEffect, useState } from 'react';

import * as microsoftTeams from '@microsoft/teams-js';

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
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default TeamsProvider;
