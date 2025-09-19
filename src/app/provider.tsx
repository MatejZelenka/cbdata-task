'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/footer';
import { PlanetContextProvider } from '@/context/context';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <PlanetContextProvider>
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {props.children}
          <Footer />
        </ThemeProvider>
      </ChakraProvider>
    </PlanetContextProvider>
  );
}
