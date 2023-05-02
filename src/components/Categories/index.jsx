import React from "react";
import "./Categories.scss";

const Categories = ({ value, onClickCategory }) => {
  const categoryList = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categoryList.map((item, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
