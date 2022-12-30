import { GridContainer, InputSearch } from "./styles";
import P from "prop-types";

const Search = ({ search, handleChange }) => {
  return (
    <GridContainer>
      <InputSearch
        type="search"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      ></InputSearch>
    </GridContainer>
  );
};

Search.propTypes = {
  search: P.string,
  handleChange: P.func,
};

export default Search;
