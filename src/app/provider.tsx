'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/footer';
import { PlanetContextProvider } from '@/context/context';
import { Suspense } from 'react';
import { system } from '@/theme/theme';
import LoadingSpinner from '@/components/loading-spinner';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <PlanetContextProvider>
      <ChakraProvider value={system}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Suspense fallback={<LoadingSpinner />}>{props.children}</Suspense>
          <Footer />
        </ThemeProvider>
      </ChakraProvider>
    </PlanetContextProvider>
  );
}
