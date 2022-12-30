import React, { useEffect } from "react";
import "./styles.css";
import P from "prop-types";
import { useFilterContext } from "../../contexts/FilterProvider";
import { useDataContext } from "../../contexts";

const Pagination = ({ perPage, setCurrentPage, currentPage }) => {
  const { filter_character } = useFilterContext();
  const { characters } = useDataContext();

  const numOfTotalPages = Math.ceil(filter_character.length / perPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  // const [currentPage, setCurrentPage] = useState(1);

  const previousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };

  const redirecToFirstPage = () => {
    if (filter_character.length !== characters.length) setCurrentPage(1);
  };

  useEffect(() => {
    redirecToFirstPage();
  }, [filter_character]);

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li className="page-item">
          <a href="#" onClick={previousPage}>
            Prev
          </a>
        </li>
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => setCurrentPage(page)}
            >
              {`${page}`}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a href="#" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  perPage: P.number,
  setCurrentPage: P.func,
  currentPage: P.number,
};

export default Pagination;
