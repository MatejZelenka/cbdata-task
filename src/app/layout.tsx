import { Inter } from 'next/font/google';
import Provider from './provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <head title="Star Wars Planets" />
      <body style={{ backgroundColor: 'black' }}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
