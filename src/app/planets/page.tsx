'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { usePlanets } from '@/context/context';
import { useEffect } from 'react';
import { FiDatabase, FiRefreshCw } from 'react-icons/fi';
import PlanetCard from '@/components/planet-card';

export default function PlanetsPage() {
  const {
    planets,
    isLoading,
    error,
    fetchPlanets,
    totalCount,
    refreshPlanets,
  } = usePlanets();

  useEffect(() => {
    if (planets.length === 0 && !isLoading && !error) {
      fetchPlanets();
    }
  }, [error, fetchPlanets, isLoading, planets.length]);

  if (isLoading) {
    return <Box>Loading</Box>;
  }

  if (error) {
    return <Box>Error</Box>;
  }

  return (
    <>
      <Box as="header" borderBottom="1px solid" borderBottomColor="yellow.500">
        <Container maxWidth="6xl">
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
            color="yellow.500"
            padding={4}
            alignItems="center"
          >
            <GridItem colSpan={2}>
              <Flex alignItems="center" gap={2}>
                <FiDatabase size={36} />
                <Heading size={{ base: '2xl', md: '3xl', lg: '5xl' }}>
                  PLANETARY DATABASE
                </Heading>
              </Flex>
            </GridItem>
            <GridItem marginLeft="auto">
              <Button
                borderColor="yellow.500"
                loading={isLoading}
                disabled={isLoading}
                variant="outline"
                color="yellow.500"
                _hover={{ backgroundColor: 'yellow.500', color: 'black' }}
                onClick={refreshPlanets}
              >
                <FiRefreshCw />
                Refresh Data
              </Button>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="6xl" backgroundColor="black" paddingY={4}>
        <Flex justifyContent="center" mb={4}>
          <Text
            paddingX={6}
            paddingY={3}
            textTransform="uppercase"
            color="yellow.400"
            fontSize="sm"
            borderRadius="lg"
            border="1px solid"
            borderColor="yellow.700"
            backgroundColor="orange.700/15"
          >
            Database status: {planets.length} of {totalCount} records loaded
          </Text>
        </Flex>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          {planets.map((planet, key) => (
            <GridItem key={key}>
              <PlanetCard {...planet} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
}
