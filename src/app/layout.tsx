import React from 'react';
import LayoutScaffold from '@/components/layout';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Fasraf . Business . Solution</title>
      </head>

      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
      >
        <LayoutScaffold>{children}</LayoutScaffold>
      </body>
    </html>
  );
}
