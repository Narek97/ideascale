'use client';
import React from 'react';

import { Button } from '@fluentui/react-button';

import { useAuthState } from '@/providers/AuthProvider';

const LogOut = () => {
  const { logout } = useAuthState();

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default LogOut;
