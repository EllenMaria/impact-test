/* eslint-disable no-case-declarations */
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
    // FILTER ACTIONS
    case types.LOAD_FILTER:
      return {
        ...state,
        filter_characters: [...action.payload],
        all_characters: [...action.payload],
        filters: { ...state.filters },
      };
    case types.UPDATE_FILTER:
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case types.FILTER_CHARACTERS:
      let { all_characters } = state;
      let tempFilterCharacter = [...all_characters];

      const { gender, species, films } = state.filters;

      if (gender !== "all") {
        tempFilterCharacter = tempFilterCharacter.filter(
          (item) => item.gender === gender,
        );
      }
      if (species !== "all") {
        tempFilterCharacter = tempFilterCharacter.filter((item) =>
          item.species.includes(species),
        );
      }
      if (films !== "all") {
        tempFilterCharacter = tempFilterCharacter.filter((item) =>
          item.films.includes(films),
        );
      }

      return {
        ...state,
        filter_character: tempFilterCharacter,
      };

    case types.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          gender: "all",
          films: "all",
          species: "all",
        },
      };
    default:
      return state;
  }
};
