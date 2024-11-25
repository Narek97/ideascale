'use client';

import React, { useEffect } from 'react';

import * as microsoftTeams from '@microsoft/teams-js';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  useEffect(() => {
    microsoftTeams.app.initialize().then(() => {
      microsoftTeams.app.getContext().then(async () => {
        if (code) {
          await fetch(
            `https://0183-130-193-123-98.ngrok-free.app/api/auth/generate-token?code=${code}`,
          )
            .then(res => res.json())
            .then(data => {
              microsoftTeams.authentication.notifySuccess(data);
            })
            .catch(error => microsoftTeams.authentication.notifyFailure(error));
        } else if (error) {
          // Notify Teams that authentication failed
          microsoftTeams.authentication.notifyFailure(error);
        } else {
          // No code or error, fallback error handling
          microsoftTeams.authentication.notifyFailure('No code or error returned');
        }
      });
    });
  }, [code, error]);

  return <div>Loading</div>;
};

export default Page;
