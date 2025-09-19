'use client';

import { Box } from '@chakra-ui/react';
import { usePlanets } from '@/context/context';
import { useEffect } from 'react';

export default function PlanetsPage() {
  const { planets, fetchPlanets } = usePlanets();

  const test = fetch('https://swapi.info/api/planets')
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));

  useEffect(() => {
    console.log('useEffect triggered');
    fetchPlanets();
  }, [fetchPlanets]);

  console.log(test);

  // if (isLoading) {
  //   return <Box>Loading</Box>;
  // }
  //
  // if (error) {
  //   return <Box>Error</Box>;
  // }

  return planets.length >= 1 ? <Box>Planets</Box> : <Box>No planets</Box>;
}
