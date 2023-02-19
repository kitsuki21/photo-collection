import React from "react";

const Navigation = ({
  categoryId,
  setCategoryId,
  onChahgeSearchValue,
  serchValue,
}) => {
  const categories = [
    { name: "Все" },
    { name: "Море" },
    { name: "Горы" },
    { name: "Архитектура" },
    { name: "Города" },
  ];

  return (
    <div className="navbar">
      <ul className="navbar-tags">
        {categories.map((obj, i) => (
          <li
            onClick={() => setCategoryId(i)}
            className={`tags-elem ${
              categoryId === i ? "tags-elem-active" : ""
            }`}
            key={obj.name}
          >
            {obj.name}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="поиск"
        value={serchValue}
        onChange={onChahgeSearchValue}
      ></input>
    </div>
  );
};

export default Navigation;
