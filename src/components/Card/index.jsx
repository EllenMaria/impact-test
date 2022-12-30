import { useState } from "react";
import { useDataContext } from "../../contexts";
import { useFilterContext } from "../../contexts/FilterProvider";
import Dropdown from "../Dropdown";
import Loading from "../Loading";
import Pagination from "../Pagination";
import Search from "../Search";
import CardData from "./CardData";
import { Cards } from "./styles";

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

  const {
    filters: { gender, species, films },
    updateFilterValue,
    filter_character,
    clearFilters,
    all_characters,
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    // if (attr === "films" || attr === "title") {
    //   newVal = newVal.flat();
    // }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const genderData = getUniqueData(all_characters, "gender");
  const filmData = getUniqueData(filmsData, "url");
  const specieData = getUniqueData(speciesData, "url");

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    if (query !== "") {
      searchCharacters(query);
    } else {
      clearSearch();
    }
  };

  const [perPage] = useState(10);

  // const numOfTotalPages = Math.ceil(characters.length / perPage);
  // const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
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

  const genders = ["male", "female", "n/a", "all genders"];

  const [open, setOpen] = useState(false);
  const [selectDemoValue, setSelectDemoValue] = useState("all genders");

  if (loading && isFilmLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Characters</h1>
      <Search handleChange={handleChange} search={query} />

      <Dropdown
        open={open}
        setOpen={setOpen}
        selectDemoValue={selectDemoValue}
        setSelectDemoValue={setSelectDemoValue}
        genders={genders}
      />
      <div className="filter-category">
        <h3>Gender</h3>
        <form action="#">
          <select name="gender" id={gender} onClick={updateFilterValue}>
            {genderData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="gender">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-category">
        <h3>Films</h3>
        <form action="#" className={films}>
          <select name="films" id="films" onClick={updateFilterValue}>
            {filmData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="films">
                  {curElem === "all"
                    ? "all films"
                    : filmsData.map((f) => (f.url === curElem ? f.title : ""))}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-category">
        <h3>Species</h3>
        <form action="#" className={species}>
          <select name="species" id="species" onClick={updateFilterValue}>
            {specieData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="species">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <button onClick={clearFilters}>Clear Filters</button>
      <Cards>
        {filtered.map((character) => (
          <CardData key={character.name} character={character} />
        ))}
        {filtered.length === 0 && <p>Tem nada aqui vai circulando!</p>}
      </Cards>
      <Pagination
        perPage={perPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Characters;
