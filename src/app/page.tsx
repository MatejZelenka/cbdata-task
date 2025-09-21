import { Box, Button, Heading, VStack, Flex } from '@chakra-ui/react';
import { SiRocket } from 'react-icons/si';
import Link from 'next/link';

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
        <Heading color="yellow.500" size="4xl">
          Star Wars Planets
        </Heading>
        <Heading color="yellow.500" size="2xl" letterSpacing="tight">
          Explore planets in Star Wars Universe
        </Heading>
      </VStack>
      <Box marginTop="1rem">
        <Link href="/planets">
          <Button
            borderColor="yellow.500"
            variant="outline"
            color="yellow.500"
            _hover={{ backgroundColor: 'yellow.500', color: 'black' }}
          >
            <SiRocket /> Explore!
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
