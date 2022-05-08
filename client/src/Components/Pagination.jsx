import React from "react";
import "./Styles/Pagination.css";

export default function Pagination({ pokes, pokesPerPage, pagination }) {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(pokes / pokesPerPage); i++) {
    pageNum.push(i);
  }

  return (
    <nav id="Pagination">
      <ul>
        {pageNum &&
          pageNum.map((number) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a id="Page" onClick={() => pagination(number)}>
              {number}
            </a>
          ))}
      </ul>
    </nav>
  );
}
