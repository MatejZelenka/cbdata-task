'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/footer';
import { PlanetContextProvider } from '@/context/context';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/loading-spinner';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <PlanetContextProvider>
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Suspense fallback={<LoadingSpinner />}>{props.children}</Suspense>
          <Footer />
        </ThemeProvider>
      </ChakraProvider>
    </PlanetContextProvider>
  );
}
