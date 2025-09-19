import { PlanetsResponse } from '@/types';

const BASE_URL = 'https://swapi.info/api/planets';

export const fetchPlanetsUtil = async (): Promise<PlanetsResponse> => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Unknown error');
  }
};
