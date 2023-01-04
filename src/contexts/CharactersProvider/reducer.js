import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.DATA_SUCCESS: {
      return { ...state, characters: action.payload, loading: false };
    }
    case types.DATA_LOADING: {
      return { ...state, loading: true };
    }
    case types.API_ERROR: {
      return { ...state, loading: false, isFilmLoading: false, error: true };
    }
    case types.FILMS_SUCCESS: {
      return { ...state, filmsData: action.payload, isFilmLoading: false };
    }
    case types.FILMS_LOADING: {
      return { ...state, isFilmLoading: true };
    }
    case types.FILMS_ERROR: {
      return { ...state, isFilmLoading: false, error: true };
    }
    case types.SPECIES_SUCCESS: {
      return { ...state, speciesData: action.payload };
    }
    case types.SPECIES_LOADING: {
      return { ...state };
    }
    case types.SPECIES_ERROR: {
      return { ...state, error: true };
    }
    case types.VEHICLES_SUCCESS: {
      return { ...state, vehiclesData: action.payload };
    }
    case types.VEHICLES_LOADING: {
      return { ...state };
    }
    case types.VEHICLES_ERROR: {
      return { ...state, error: true };
    }
    case types.STARSHIPS_SUCCESS: {
      return { ...state, starshipsData: action.payload };
    }
    case types.STARSHIPS_LOADING: {
      return { ...state };
    }
    case types.STARSHIPS_ERROR: {
      return { ...state, error: true };
    }
    // SEARCH ACTIONS
    case types.SEARCH_CHARACTERS: {
      return {
        ...state,
        search: state.characters.filter((item) => {
          const regex = new RegExp(`${action.payload}`, "ig");
          return item.name.match(regex);
        }),
      };
    }
    case types.CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };
    default:
      return state;
  }
};
