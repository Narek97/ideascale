import { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import AuthProvider from '@/providers/AuthProvider';
import FluentProvider from '@/providers/FluentProvider';
import TanstackProvider from '@/providers/TanstackProvider';
import TeamsProvider from '@/providers/TeamsProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'IdeaScale',
  description: 'IdeaScale teams app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        background: 'white',
      }}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TeamsProvider>
          <TanstackProvider>
            <FluentProvider>
              <AuthProvider>{children}</AuthProvider>
            </FluentProvider>
          </TanstackProvider>
        </TeamsProvider>
      </body>
    </html>
  );
}
