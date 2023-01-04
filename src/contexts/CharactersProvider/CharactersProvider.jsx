import P from "prop-types";
import { useEffect, useReducer, useRef, useContext } from "react";
import {
  loadData,
  loadFilms,
  loadSpecies,
  loadVehicles,
  loadStarships,
} from "./actions";
import { CharactersContext } from "./context";
import { data } from "./data";
import { reducer } from "./reducer";
import * as types from "./types";

export const CharactersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

  const searchCharacters = (text) => {
    dispatch({ type: types.SEARCH_CHARACTERS, payload: text });
  };

  const clearSearch = () => {
    dispatch({ type: types.CLEAR_SEARCH });
  };

  const isMounted = useRef(false);

  useEffect(() => {
    loadData(dispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  useEffect(() => {
    loadFilms(dispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  useEffect(() => {
    loadSpecies(dispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  useEffect(() => {
    loadVehicles(dispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  useEffect(() => {
    loadStarships(dispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  return (
    <CharactersContext.Provider
      value={{
        ...state,
        searchCharacters,
        clearSearch,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(CharactersContext);
};

CharactersProvider.propTypes = {
  children: P.node.isRequired,
};
