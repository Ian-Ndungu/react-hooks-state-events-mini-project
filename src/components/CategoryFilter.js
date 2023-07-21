import React from "react";

function CategoryFilter() {
  const categories = ["Category1", "Category2", "Category3"]; // Replace this with your actual categories array

  const handleCategoryClick = (category) => {
    // Replace this with your desired handling logic for category clicks
    console.log("Clicked category:", category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div>
        <button onClick={() => handleCategoryClick("All")}>All</button>
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
