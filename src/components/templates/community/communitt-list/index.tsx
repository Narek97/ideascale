'use client';
import React from 'react';

import Community from '@/components/templates/community/communitt-list/community';
import { useAuthState } from '@/providers/AuthProvider';

const CommunityList = () => {
  const { user } = useAuthState();

  return (
    <ul>
      {user?.memberships.map(community => (
        <li key={community.id}>
          <Community id={community.id} title={community.name} apiToken={community.apiTokens[0]} />
        </li>
      ))}
    </ul>
  );
};

export default CommunityList;
