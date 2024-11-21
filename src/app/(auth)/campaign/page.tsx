'use client';
import React from 'react';

import { Button } from '@fluentui/react-button';

import { useAuthState } from '@/providers/AuthProvider';

const Campaign = () => {
  const { logout } = useAuthState();

  return (
    <div>
      Campaign
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Campaign;
