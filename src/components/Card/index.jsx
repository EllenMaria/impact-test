import { useState, useCallback } from "react";
import { useDataContext } from "../../contexts/CharactersProvider/CharactersProvider";
import { useFilterContext } from "../../contexts/FilterProvider/FilterProvider";
import Loading from "../Loading";
import Pagination from "../Pagination";
import Search from "../Search";
import Select from "../Select";
import CardData from "./CardData";
import { Cards, SelectContainer } from "./styles";

const Characters = () => {
  const {
    loading,
    isFilmLoading,
    searchCharacters,
    clearSearch,
    filmsData,
    speciesData,
  } = useDataContext();
  const [query, setQuery] = useState("");

  const { filter_character, clearFilters, updateFilterValue, all_characters } =
    useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    return [`all`, ...new Set(newVal)];
  };

  const genderData = getUniqueData(all_characters, "gender");
  const filmData = getUniqueData(filmsData, "url");
  const specieData = getUniqueData(speciesData, "url");

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setQuery(value);
    if (query !== "") {
      searchCharacters(query);
    } else {
      clearSearch();
    }
  }, []);

  const [perPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCharacter = currentPage * perPage;
  const indexOfFirstCharacter = indexOfLastCharacter - perPage;

  const visibleCharacter = filter_character.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter,
  );

  const filtered = query
    ? filter_character.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      })
    : visibleCharacter;

  if (loading && isFilmLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Characters</h1>
      <Search handleChange={handleChange} search={query} />

      <SelectContainer>
        <p>Filter by</p>

        <Select
          updateFilterValue={updateFilterValue}
          filterData={genderData}
          dataName="genders"
          borderColor={"#FF8989"}
        />

        <Select
          updateFilterValue={updateFilterValue}
          filterData={filmData}
          filterName={filmsData}
          dataName="films"
          borderColor={"#45C1FF"}
        />

        <Select
          updateFilterValue={updateFilterValue}
          filterData={specieData}
          filterName={speciesData}
          dataName="species"
          borderColor={"#57FF86"}
        />
      </SelectContainer>

      <button onClick={clearFilters}>Clear Filters</button>

      <div>
        {!query && (
          <p>
            Showing {visibleCharacter.length} of {filter_character.length}{" "}
            characters
          </p>
        )}
      </div>

      <Cards>
        {filtered.map((character) => (
          <CardData key={character.name} character={character} />
        ))}
        {filtered.length === 0 && <p>Tem nada aqui vai circulando!</p>}
      </Cards>
      <div>
        {!query && (
          <Pagination
            perPage={perPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Characters;
