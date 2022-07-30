import React, { useState } from "react";

function Categories({value,onChangeClickCategory}) {
 
  console.log(value)

  const categories = [
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
        {categories.map((categoryName, i) => (
          <li key={i}
            onClick={() => onChangeClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
