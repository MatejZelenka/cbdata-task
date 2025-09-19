'use client';

import { Box, ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/footer';
import { PlanetContextProvider } from '@/context/context';
import { Suspense } from 'react';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <PlanetContextProvider>
          <Suspense fallback={<Box>Loading...</Box>}>
            {props.children}
            <Footer />
          </Suspense>
        </PlanetContextProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}
