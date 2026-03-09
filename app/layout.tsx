import type { Metadata } from 'next';
import '@/styles/_main.scss';

export const metadata: Metadata = {
  title: 'Brendan Betheldo',
  description: 'Personal site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
