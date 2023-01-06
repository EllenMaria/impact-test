import React, { useEffect } from "react";
import "./styles.css";
import P from "prop-types";
import { useDataContext, useFilterContext } from "../../contexts";
import { Link } from "react-router-dom";

export const Pagination = ({ perPage, setCurrentPage, currentPage }) => {
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
    <nav
      role="navigation"
      aria-label="Pagination"
      className="pagination-container"
    >
      <ul className="pagination">
        <li className="page-item">
          <Link onClick={previousPage}>◂ Prev</Link>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            aria-label={`Current Page ${page}`}
            aria-current="true"
            className="page-item"
          >
            <Link
              className={`${currentPage === page ? "active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {`${page}`}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link onClick={nextPage}>Next ▸</Link>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  perPage: P.number,
  setCurrentPage: P.func,
  currentPage: P.number,
};
