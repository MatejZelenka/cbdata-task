import { createContext, useReducer } from 'react';
import { Action, InitialState, Planet, PlanetsContextType } from '@/types';
import { fetchPlanetsUtil } from '@/utils/fetch';

const initialState: InitialState = {
  isLoading: false,
  planets: [],
  error: null,
};

const planetsReducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        planets: action.payload.planets,
      };
    default:
      return state;
  }
};

const PlanetsContext = createContext<PlanetsContextType | undefined>(undefined);

export const PlanetContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(planetsReducer, initialState);

  const fetchPlanets = async () => {
    try {
      const response = await fetchPlanetsUtil();

      dispatch({
        type: 'FETCH_SUCCESS',
        payload: {
          planets: response?.results,
        },
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err instanceof Error ? err.message : 'Unknown error occurred',
      });
    }
  };

  const contextValue: PlanetsContextType = {
    ...state,
    fetchPlanets,
  };

  return (
    <PlanetsContext.Provider value={contextValue}>
      {children}
    </PlanetsContext.Provider>
  );
};
