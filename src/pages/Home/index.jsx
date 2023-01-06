import { useState, useCallback } from "react";
import { useDataContext } from "../../contexts/CharactersProvider/CharactersProvider";
import { useFilterContext } from "../../contexts/FilterProvider/FilterProvider";

import { Card, Loading, Pagination, Search, Select } from "../../components";

import { Cards, ClearButton, SelectContainer } from "./styles";
import { Heading } from "../../components/Heading/styles";
import { AnimatePresence } from "framer-motion";
import BackToTopButton from "../../components/BackToTop";

const Characters = () => {
  const { loading, searchCharacters, clearSearch, filmsData, speciesData } =
    useDataContext();
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

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setQuery(value);
      if (query !== "") {
        searchCharacters(query);
      } else {
        clearSearch();
      }
    },
    [clearSearch, query, searchCharacters],
  );

  const [perPage] = useState(18);
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

  if (loading) {
    return <Loading></Loading>;
  }

  const clearF = () => {
    clearFilters();
    if (filter_character.length !== 87) setCurrentPage(1);
  };

  return (
    <div>
      <Heading
        level={1}
        color="yellowColor"
        fontSize="header2"
        align="center"
        weight="700"
        textTransform="uppercase"
      >
        Characters
      </Heading>

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

      <ClearButton onClick={clearF}>Clear Filters</ClearButton>

      <div>
        {!query && (
          <Heading level={5} color="secondaryLightColor">
            Showing {visibleCharacter.length} of {filter_character.length}{" "}
            characters
          </Heading>
        )}
      </div>

      <Cards>
        <AnimatePresence>
          {filtered.map((character) => (
            <Card key={character.name} character={character} query={query} />
          ))}
          {filtered.length === 0 && <Loading></Loading>}
        </AnimatePresence>
      </Cards>
      <BackToTopButton />
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
