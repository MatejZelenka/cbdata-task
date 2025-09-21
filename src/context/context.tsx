'use client';

import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useCallback,
} from 'react';
import { Action, InitialState, PlanetsContextType } from '@/types';
import { fetchPlanetsUtil } from '@/utils/fetch';

const initialState: InitialState = {
  isLoading: false,
  planets: [],
  error: null,
  currentPage: 1,
  totalCount: 0,
  hasNext: false,
  hasPrevious: false,
};

const planetsReducer = (state: InitialState, action: Action): InitialState => {
  console.log('Action:', action);
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
        totalCount: action.payload.totalCount,
        hasNext: action.payload.hasNext,
        hasPrevious: action.payload.hasPrevious,
        currentPage: action.payload.currentPage,
      };
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

const PLANETS_PER_PAGE = 20;

const PlanetsContext = createContext<PlanetsContextType | undefined>(undefined);

export const PlanetContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(planetsReducer, initialState);

  const fetchPlanets = useCallback(async (page = 1) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const planets = await fetchPlanetsUtil();
      const startIndex = (page - 1) * PLANETS_PER_PAGE;
      const endIndex = startIndex + PLANETS_PER_PAGE;
      const paginatedPlanets = planets.slice(startIndex, endIndex);
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: {
          planets: paginatedPlanets,
          totalCount: planets.length,
          hasNext: endIndex < planets.length,
          hasPrevious: page > 1,
          currentPage: page,
        },
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err instanceof Error ? err.message : 'Unknown error occurred',
      });
    }
  }, []);

  const refreshPlanets = useCallback(async () => {
    await fetchPlanets(state.currentPage);
  }, [fetchPlanets, state.currentPage]);

  const nextPage = useCallback(async () => {
    if (state.hasNext) {
      const newPage = state.currentPage + 1;
      dispatch({ type: 'SET_PAGE', payload: newPage });
      await fetchPlanets(newPage);
    }
  }, [fetchPlanets, state.currentPage, state.hasNext]);
  const previousPage = useCallback(async () => {
    if (state.hasPrevious) {
      const newPage = state.currentPage - 1;
      dispatch({ type: 'SET_PAGE', payload: newPage });
      await fetchPlanets(newPage);
    }
  }, [fetchPlanets, state.currentPage, state.hasPrevious]);
  const contextValue: PlanetsContextType = useMemo(
    () => ({ ...state, fetchPlanets, refreshPlanets, nextPage, previousPage }),
    [state, fetchPlanets, refreshPlanets, nextPage, previousPage]
  );

  return (
    <PlanetsContext.Provider value={contextValue}>
      {children}
    </PlanetsContext.Provider>
  );
};

export const usePlanets = () => {
  const context = useContext(PlanetsContext);
  if (context === undefined) {
    throw new Error('usePlanets must be used within a PlanetsProvider');
  }
  return context;
};
