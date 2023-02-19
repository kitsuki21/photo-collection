import React from "react";

const Pages = ({ page, setPage }) => {
  return (
    <ul className="pages">
      {[...Array(5)].map((_, i) => (
        <li
          key={i}
          onClick={() => setPage(i + 1)}
          className={`pages-elem ${page === i + 1 ? "pages-elem-active" : ""}`}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pages;
