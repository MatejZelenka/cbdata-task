import {
  Box,
  Button,
  ClientOnly,
  Heading,
  Skeleton,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { ColorModeToggle } from '@/components/color-mode-toggle';
import { SiRocket } from 'react-icons/si';

export default async function Page() {
  return (
    <Flex
      as="main"
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      fontSize="xl"
    >
      <VStack gap="4">
        <Heading size="4xl">Star Wars Planets</Heading>
        <Heading size="2xl" letterSpacing="tight">
          Explore planets in Star Wars Universe
        </Heading>
      </VStack>
      <Box marginTop="1rem">
        <Button>
          <SiRocket /> Explore!
        </Button>
      </Box>
      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ColorModeToggle />
        </ClientOnly>
      </Box>
    </Flex>
  );
}
