import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { Planet } from '@/types';

export default function PlanetCard({
  terrain,
  gravity,
  population,
  diameter,
  climate,
  name,
  surface_water,
}: Planet) {
  return (
    <Flex
      borderRadius="md"
      borderColor="yellow.700"
      border="1px solid"
      padding="1rem"
      gap={4}
      color="yellow.500"
      flexDirection="column"
    >
      <Box>
        <Heading textTransform="uppercase" size="xl">
          {name}
        </Heading>
      </Box>
      <Box>
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem>
            <Text color="yellow.700">Climate: </Text>
            <Text>{climate}</Text>
          </GridItem>
          <GridItem>Terrain: {terrain}</GridItem>
          <GridItem>Population: {population}</GridItem>
          <GridItem>Diameter: {diameter}</GridItem>
        </Grid>
      </Box>
      <Box>Gravity: {gravity}</Box>
      <Box>Surface Water: {surface_water}%</Box>
    </Flex>
  );
}
