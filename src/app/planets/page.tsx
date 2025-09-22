'use client';

import {
  Box,
  Button,
  ClientOnly,
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
import LoadingSpinner from '@/components/loading-spinner';
import ErrorMessage from '@/components/error-message';

const PlanetsPage = () => {
  const {
    planets,
    isLoading,
    error,
    fetchPlanets,
    totalCount,
    currentPage,
    hasPrevious,
    hasNext,
    nextPage,
    previousPage,
    refreshPlanets,
  } = usePlanets();

  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
  };

  useEffect(() => {
    if (planets.length === 0 && !isLoading && !error) {
      fetchPlanets();
    }
  }, [error, fetchPlanets, isLoading, planets.length]);
  const TOTAL_PAGES = Math.ceil(totalCount / 20);

  return (
    <>
      <Box as="header" borderBottom="1px solid" borderBottomColor="yellow.500">
        <Container maxWidth="6xl">
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
            color="yellow.500"
            padding={4}
            alignItems="center"
          >
            <GridItem colSpan={2}>
              <Flex alignItems="center" gap={2} flexWrap="nowrap">
                <FiDatabase size={36} />
                <Heading size={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                  PLANETARY DATABASE
                </Heading>
              </Flex>
            </GridItem>
            <GridItem marginLeft="auto">
              <Button
                borderColor="yellow.500"
                loading={isLoading}
                disabled={isLoading || !refreshPlanets}
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
      <Container as="main" maxWidth="6xl" paddingY={4} minHeight="100vh">
        {error && planets.length === 0 && !isLoading ? (
          <ErrorMessage
            message={error}
            onRetry={fetchPlanets}
            isLoading={isLoading}
          />
        ) : isLoading && planets.length === 0 ? (
          <LoadingSpinner />
        ) : (
          <ClientOnly fallback={<LoadingSpinner />}>
            <Flex justifyContent="center" mb={4}>
              <Flex
                paddingX={6}
                paddingY={3}
                gap={4}
                textTransform="uppercase"
                color="yellow.400"
                fontSize="sm"
                borderRadius="lg"
                border="1px solid"
                borderColor="yellow.700"
                backgroundColor="orange.700/15"
                flexWrap="wrap"
              >
                <Text>
                  Database status: {planets.length} of {totalCount} records
                  loaded
                </Text>
                <Text>
                  Sector {currentPage} of {TOTAL_PAGES}
                </Text>
              </Flex>
            </Flex>
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(1, 1fr)',
                lg: 'repeat(2, 1fr)',
              }}
              gap={6}
            >
              {planets.map((planet, key) => (
                <GridItem key={key}>
                  <PlanetCard {...planet} />
                </GridItem>
              ))}
            </Grid>
            <Flex
              justifyContent="center"
              alignItems="center"
              gap={4}
              my={8}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Button
                borderColor="yellow.500"
                loading={isLoading}
                disabled={isLoading || !hasPrevious}
                variant="outline"
                color="yellow.500"
                _hover={{ backgroundColor: 'yellow.500', color: 'black' }}
                onClick={async () => {
                  await previousPage();
                  scrollToTop();
                }}
              >
                Previous sector
              </Button>
              <Text color="yellow.500">
                Sector {currentPage} of {TOTAL_PAGES}
              </Text>
              <Button
                borderColor="yellow.500"
                loading={isLoading}
                disabled={isLoading || !hasNext}
                variant="outline"
                color="yellow.500"
                _hover={{ backgroundColor: 'yellow.500', color: 'black' }}
                onClick={async () => {
                  await nextPage();
                  scrollToTop();
                }}
              >
                Next sector
              </Button>
            </Flex>
          </ClientOnly>
        )}
      </Container>
    </>
  );
};

export default PlanetsPage;
