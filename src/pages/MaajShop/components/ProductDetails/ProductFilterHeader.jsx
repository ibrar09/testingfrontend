import React, { useState } from "react";

// -------------------- Sidebar Data --------------------
const SIDEBAR_CATEGORIES = [
  { name: "Categories for you", icon: "⭐", items: ["Laptops", "Electric Motorcycles", "Electric Scooters", "Smart Watches", "Drones", "Cars", "Car Accessories", "Tablets", "Gaming Consoles"] },
  { name: "Apparel & Accessories", icon: "👚", items: ["5G smartphone", "Toys", "Bag", "Used Cars", "Jewelry", "Mobile Phones", "Wedding Dresses"] },
  { name: "Consumer Electronics", icon: "🎧", items: ["5G smartphone", "Toys", "Bag", "Used Cars", "Jewelry", "Mobile Phones", "Wedding Dresses"] },
  { name: "Sports & Entertainment", icon: "⚽", items: ["Football", "Basketball", "Tennis Racket", "Yoga Mat", "Dumbbells", "Treadmill"] },
  { name: "Extra Category 1", icon: "🎮", items: ["Item1", "Item2"] },
  { name: "Extra Category 2", icon: "🛒", items: ["Item1", "Item2"] },
  { name: "Extra Category 3", icon: "📱", items: ["Item1", "Item2"] },
  { name: "Extra Category 4", icon: "💻", items: ["Item1", "Item2"] },
];

// -------------------- Category Item Card --------------------
const CategoryItemCard = ({ name }) => (
  <div className="flex flex-col items-center p-4 cursor-pointer hover:scale-105 transform transition duration-200 md:p-6 min-w-[150px]">
    <div className="w-24 h-24 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 shadow-md relative">
      <span className="absolute top-0 right-0 text-base md:text-lg text-red-500 animate-pulse">🔥</span>
    </div>
    <p className="mt-3 text-sm md:text-base font-medium text-gray-700 text-center">{name}</p>
  </div>
);

// -------------------- Hover Panel --------------------
const SearchWithHoverPanel = ({ searchTerm, setSearchTerm }) => {
  const [hoverPanelOpen, setHoverPanelOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(SIDEBAR_CATEGORIES[0]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => window.innerWidth >= 768 && setHoverPanelOpen(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setHoverPanelOpen(false)}
    >
      {/* Search Input */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-4 pr-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition text-sm md:text-base"
        />
      </div>

      {/* Hover Panel */}
      <div
        className={`absolute top-full left-0 w-screen md:w-[1100px] bg-white border-t md:border-t-0 border-gray-200 shadow-xl z-50 transition-all duration-300 ${
          hoverPanelOpen || window.innerWidth < 768 ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row min-h-[500px] md:min-h-[500px]">
          {/* Left Sidebar (Vertical Scroll) */}
          <div className="w-full md:w-1/3 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6 overflow-y-auto max-h-[500px]">
            {SIDEBAR_CATEGORIES.map((cat) => {
              const isActive = cat.name === activeCategory.name;
              return (
                <div
                  key={cat.name}
                  className={`flex items-center p-3 md:p-4 cursor-pointer transition-colors rounded-lg mb-2 ${
                    isActive ? "bg-white font-semibold text-black shadow-md scale-105" : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onMouseEnter={() => setActiveCategory(cat)}
                >
                  <span className="mr-3 text-xl md:text-2xl">{cat.icon}</span>
                  <span className="truncate text-sm md:text-base">{cat.name}</span>
                </div>
              );
            })}
          </div>

          {/* Right Content Panel */}
          <div className="w-full md:w-2/3 p-4 md:p-6 max-h-[500px] overflow-y-auto scrollbar-hide">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {activeCategory.items.length > 0 ? (
                activeCategory.items.map((item, idx) => <CategoryItemCard key={idx} name={item} />)
              ) : (
                <p className="text-gray-500 italic col-span-1 sm:col-span-2 md:col-span-3">No items available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------- Filter Header --------------------
const ProductFilterHeaderWithPanel = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
  totalProducts = 0,
}) => {
  return (
    <section className="w-full bg-white py-6 px-4 sm:px-6 lg:px-12 font-inter shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-96">
            <SearchWithHoverPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-48 px-4 py-2 border-2 border-gray-300 rounded-lg bg-white text-gray-700 font-medium appearance-none cursor-pointer"
          >
            <option value="">All Categories</option>
            <option value="Paints">Paints</option>
            <option value="Tools">Tools</option>
            <option value="Lighting">Lighting</option>
            <option value="Flooring">Flooring</option>
            <option value="Hardware">Hardware</option>
          </select>

          <span className="px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow-md whitespace-nowrap">
            {totalProducts} Products
          </span>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Sort By:</label>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="w-full sm:w-56 px-4 py-2 border-2 border-gray-300 rounded-lg bg-white text-gray-700 font-medium appearance-none cursor-pointer"
          >
            <option value="Most Popular">Most Popular</option>
            <option value="Newest Arrivals">Newest Arrivals</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </section>
  );
};

// -------------------- Main Shop Page --------------------
const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  return (
    <div className="p-4 sm:p-6 lg:p-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">MAAJ Shop</h1>
      <ProductFilterHeaderWithPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        totalProducts={120}
      />
    </div>
  );
};

export default ShopPage;
