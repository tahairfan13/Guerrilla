import React from "react";

function CategoriesList({
  categories,
  activeCategory,
  setActiveCategory,
  open,
}) {
  return (
    <div
      className="categories-list"
      style={{
        display: open ? "block" : "none",
      }}
    >
      {categories.map((category, key) => (
        <p
          className={`category-item ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => setActiveCategory(category)}
          key={key}
        >
          {category}
        </p>
      ))}
    </div>
  );
}

export default CategoriesList;
