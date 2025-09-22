import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Planet } from '@/types';

const PlanetCard = ({
  terrain,
  gravity,
  population,
  diameter,
  climate,
  name,
  surface_water,
}: Planet) => {
  const formatPopulation = (population: string) => {
    if (population === 'unknown') return 'Unknown';
    if (population === 'n/a') return 'N/A';
    return Number.parseInt(population).toLocaleString();
  };

  const formatDiameter = (diameter: string) => {
    if (diameter === 'unknown') return 'Unknown';
    return `${Number.parseInt(diameter).toLocaleString()} km`;
  };

  const formatSurfaceWater = (surfaceWater: string) => {
    if (surfaceWater === 'unknown') return 'Unknown';
    return `${Number.parseInt(surfaceWater).toLocaleString()} %`;
  };

  return (
    <Flex
      borderRadius="md"
      borderColor="yellow.700"
      border="1px solid"
      padding="1rem"
      gap={4}
      color="yellow.500"
      flexDirection="column"
      height="100%"
    >
      <Box>
        <Heading textTransform="uppercase" size="xl">
          {name}
        </Heading>
      </Box>
      <Box>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={4}
        >
          <GridItem>
            <Text textTransform="uppercase" color="yellow.700">
              Climate:{' '}
            </Text>
            <Text textTransform="capitalize">{climate}</Text>
          </GridItem>
          <GridItem>
            <Text textTransform="uppercase" color="yellow.700">
              Terrain:{' '}
            </Text>{' '}
            <Text textTransform="capitalize">{terrain}</Text>
          </GridItem>
          <GridItem>
            <Text textTransform="uppercase" color="yellow.700">
              Population:{' '}
            </Text>{' '}
            <Text textTransform="capitalize">
              {formatPopulation(population)}
            </Text>
          </GridItem>
          <GridItem>
            <Text textTransform="uppercase" color="yellow.700">
              Diameter:
            </Text>{' '}
            <Text textTransform="capitalize">{formatDiameter(diameter)}</Text>
          </GridItem>
        </Grid>
      </Box>
      <Flex alignItems="center" gap={2} flexWrap="wrap">
        <Text color="yellow.700">Gravity:</Text>
        <Badge variant="outline" colorPalette="cyan" size="lg">
          {gravity}
        </Badge>
      </Flex>
      <Flex alignItems="center" gap={2}>
        <Text color="yellow.700">Surface Water:</Text>
        <Badge variant="subtle" colorPalette="cyan" size="lg">
          {formatSurfaceWater(surface_water)}
        </Badge>
      </Flex>
    </Flex>
  );
};

export default PlanetCard;
