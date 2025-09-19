export type InitialState = {
  isLoading: boolean;
  planets: Planet[];
  error: string | null;
};

export type Planet = {
  name: string;
  rotationPeriod: number;
  orbitalPeriod: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type PayloadSuccess = {
  planets: Planet[];
};

export type Action =
  | {
      type: 'FETCH_START';
    }
  | {
      type: 'FETCH_SUCCESS';
      payload: PayloadSuccess;
    }
  | {
      type: 'FETCH_ERROR';
      payload: string;
    }
  | {
      type: 'SET_PAGE';
      payload: number;
    };

export type PlanetsResponse = Planet[];

export type PlanetsContextType = {
  fetchPlanets: () => Promise<void>;
} & InitialState;
