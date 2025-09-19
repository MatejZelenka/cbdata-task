'use client';

import { Box } from '@chakra-ui/react';
import { usePlanets } from '@/context/context';
import { useEffect } from 'react';

export default function PlanetsPage() {
  const { planets, isLoading, error, fetchPlanets } = usePlanets();

  useEffect(() => {
    if (planets.length === 0 && !isLoading && !error) {
      fetchPlanets();
    }
  }, [fetchPlanets]);

  if (isLoading) {
    return <Box>Loading</Box>;
  }

  if (error) {
    return <Box>Error</Box>;
  }

  return planets?.length >= 1 ? <Box>Planets</Box> : <Box>No planets</Box>;
}
