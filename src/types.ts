export type InitialState = {
  isLoading: boolean;
  planets: Planet[];
  error: string | null;
  currentPage: number;
  totalCount: number;
  hasNext: boolean;
  hasPrevious: boolean;
};

export type Planet = {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type PayloadSuccess = {
  planets: Planet[];
  totalCount: number;
  hasNext: boolean;
  hasPrevious: boolean;
  currentPage: number;
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
  refreshPlanets: () => Promise<void>;
  previousPage: () => Promise<void>;
  nextPage: () => Promise<void>;
} & InitialState;
