import React from "react";

function Paginate({ totalPage, articlesPerPage, changePage, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPage / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination mb-5 d-flex justify-content-center">
        {pageNumbers.map((index) => (
          <li
            className={currentPage === index ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => changePage(index)}
              href="javascript:void(0)"
            >
              {index}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Paginate;
