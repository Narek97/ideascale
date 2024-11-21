'use client';
import { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { useAuthState } from '@/providers/AuthProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { isLoggedIn } = useAuthState();

  if (!isLoggedIn) {
    redirect('/login');
  }

  return <>{children}</>;
}
