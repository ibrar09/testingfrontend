'use client';

import React, { useState } from "react";
import NavMenu from "./NavMenu"; // Make sure path is correct

export default function DebugNavbar() {
  const [hoverCategory, setHoverCategory] = useState(null);
  console.log("Current hoverCategory:", hoverCategory);

  return (
    <header className="relative bg-gray-100 p-4 border border-yellow-500">
      <nav className="flex items-center space-x-6">

        {/* All Categories button */}
        <div
          className="relative bg-white border border-gray-400 p-2 rounded cursor-pointer"
          onMouseEnter={() => { console.log("Hover All Categories"); setHoverCategory("All Categories"); }}
          onMouseLeave={() => { console.log("Leave All Categories"); setHoverCategory(null); }}
        >
          All Categories
        </div>

        {/* Desktop Mega Menu */}
        {hoverCategory === "All Categories" && (
          <div
            className="absolute top-full left-0 mt-2 w-[800px] bg-red-100 border-4 border-red-500 z-50 p-4"
          >
            <p>NavMenu should render here!</p>
            <NavMenu setHoverCategory={setHoverCategory} isDesktop={true} />
          </div>
        )}
      </nav>
    </header>
  );
}
