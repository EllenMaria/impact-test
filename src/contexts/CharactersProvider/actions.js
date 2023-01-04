import * as types from "./types";
import axios from "axios";

const loadAlldata = async (api, count, currentData, dispatch, typeSuccess) => {
  let allData = [];
  const totalPages = Math.ceil((count - 1) / currentData.length);
  let promises = [];

  for (let i = 2; i <= totalPages; i++) {
    promises.push(axios(api + `?page=${i}`));
  }

  const allResults = Promise.all(promises);

  allData = (await allResults).reduce(
    (acc, data) => [...acc, ...data.data.results],
    currentData,
  );

  dispatch({ type: typeSuccess, payload: allData });
};

const APIcharacters = "https://swapi.py4e.com/api/people";

export const loadData = async (dispatch) => {
  dispatch({ type: types.DATA_LOADING });
  try {
    const response = await axios.get(APIcharacters);
    const characters = await response.data.results;
    const count = response.data.count;

    loadAlldata(APIcharacters, count, characters, dispatch, "DATA_SUCCESS");
  } catch (error) {
    dispatch({ type: types.API_ERROR });
  }
};

const APIfilms = "https://swapi.py4e.com/api/films/";

export const loadFilms = async (dispatch) => {
  dispatch({ type: types.FILMS_LOADING });
  try {
    const response = await axios.get(APIfilms);
    const films = await response.data;
    dispatch({ type: types.FILMS_SUCCESS, payload: films.results });
  } catch (error) {
    dispatch({ type: types.FILMS_ERROR });
  }
};

const APISpecies = "https://swapi.py4e.com/api/species";

export const loadSpecies = async (dispatch) => {
  dispatch({ type: types.SPECIES_LOADING });
  try {
    const response = await axios.get(APISpecies);
    const species = await response.data.results;
    const count = response.data.count;

    loadAlldata(APISpecies, count, species, dispatch, "SPECIES_SUCCESS");
  } catch (error) {
    dispatch({ type: types.SPECIES_ERROR });
  }
};

const APIVehicles = "https://swapi.py4e.com/api/vehicles/";

export const loadVehicles = async (dispatch) => {
  dispatch({ type: types.VEHICLES_LOADING });
  try {
    const response = await axios.get(APIVehicles);
    const vehicles = await response.data.results;
    const count = response.data.count;
    loadAlldata(APIVehicles, count, vehicles, dispatch, "VEHICLES_SUCCESS");
  } catch (error) {
    dispatch({ type: types.VEHICLES_ERROR });
  }
};
const APIStarships = "https://swapi.py4e.com/api/starships/";

export const loadStarships = async (dispatch) => {
  dispatch({ type: types.STARSHIPS_LOADING });
  try {
    const response = await axios.get(APIStarships);
    const starships = await response.data.results;
    const count = response.data.count;
    loadAlldata(APIStarships, count, starships, dispatch, "STARSHIPS_SUCCESS");
  } catch (error) {
    dispatch({ type: types.STARSHIPS_ERROR });
  }
};
