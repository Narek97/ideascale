'use client';
import React, { ReactNode } from 'react';

import { FluentProvider as MyFluentProvider, teamsLightTheme } from '@fluentui/react-components';

const FluentProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MyFluentProvider theme={teamsLightTheme}>{children}</MyFluentProvider>
    </>
  );
};

export default FluentProvider;
