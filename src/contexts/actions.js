import * as types from "./types";
import axios from "axios";

const APIcharacters = "https://swapi.dev/api/people";

export const loadData = async (dispatch) => {
  let allCharacters = [];
  dispatch({ type: types.DATA_LOADING });
  try {
    const response = await axios.get(APIcharacters);
    const characters = await response.data.results;
    const count = response.data.count;

    const totalPages = Math.ceil((count - 1) / 10);
    let promises = [];

    for (let i = 2; i <= totalPages; i++) {
      promises.push(axios(APIcharacters + `?page=${i}`));
    }

    const allResults = Promise.all(promises);

    allCharacters = (await allResults).reduce(
      (acc, data) => [...acc, ...data.data.results],
      characters,
    );

    dispatch({ type: types.DATA_SUCCESS, payload: allCharacters });
  } catch (error) {
    dispatch({ type: "API_ERROR" });
  }
};

const APIfilms = "https://swapi.dev/api/films/";

export const loadFilms = async (dispatch) => {
  dispatch({ type: types.FILMS_LOADING });
  try {
    const response = await axios.get(APIfilms);
    const films = await response.data;
    dispatch({ type: types.FILMS_SUCCESS, payload: films.results });
  } catch (error) {
    dispatch({ type: "FILMS_ERROR" });
  }
};

const APISpecies = "https://swapi.dev/api/species";

export const loadSpecies = async (dispatch) => {
  let allSpecies = [];
  dispatch({ type: types.SPECIES_LOADING });
  try {
    const response = await axios.get(APISpecies);
    const species = await response.data.results;
    const count = response.data.count;

    const totalPages = Math.ceil((count - 1) / 10);
    let promises = [];

    for (let i = 2; i <= totalPages; i++) {
      promises.push(axios(APISpecies + `?page=${i}`));
    }

    const allResults = Promise.all(promises);

    allSpecies = (await allResults).reduce(
      (acc, data) => [...acc, ...data.data.results],
      species,
    );

    dispatch({ type: types.SPECIES_SUCCESS, payload: allSpecies });
  } catch (error) {
    dispatch({ type: "SPECIES_ERROR" });
  }
};
