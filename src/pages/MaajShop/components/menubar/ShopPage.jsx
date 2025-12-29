import React, { useState } from "react";
import ProductFilterHeader from "./ProductFilterHeader";
import CategorySelector from "./CategorySelector"; // your hover sidebar

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      {/* Filter Bar */}
      <ProductFilterHeader
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={""}
        setSearchTerm={() => {}}
        selectedSort={""}
        setSelectedSort={() => {}}
        totalProducts={100} // example
      />

      {/* Category Sidebar + Content */}
      <CategorySelector
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default ShopPage;
