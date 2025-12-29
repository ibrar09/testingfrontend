// src/pages/MaajShop/components/CategoryShowcase.jsx

import React, { useEffect, useState } from "react";
import api from "../../api/api";   // ✅ your global axios instance
import { useNavigate } from "react-router-dom";

const gradientColors = [
  "from-blue-500 to-indigo-600",
  "from-pink-500 to-rose-500",
  "from-green-500 to-emerald-600",
  "from-yellow-400 to-orange-500",
  "from-cyan-500 to-teal-600",
  "from-purple-500 to-fuchsia-600",
];

const CategoryShowcase = ({ highlightTop = false }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // ✅ Using api instead of axios + no hardcoded URL
        const res = await api.get("/categories");
        setCategories(res.data || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading)
    return (
      <div className="text-center py-10 text-gray-500 animate-pulse">
        Loading categories...
      </div>
    );

  if (error)
    return (
      <div className="text-center py-10 text-red-600 font-semibold">
        {error}
      </div>
    );

  const heroCategory = highlightTop && categories.length > 0 ? categories[0] : null;
  const gridCategories = highlightTop ? categories.slice(1) : categories;

  return (
    <section className="px-6 md:px-12 my-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Shop by Category
      </h2>

      {heroCategory && (
        <div
          onClick={() => navigate(`/category/${heroCategory.id}`)}
          className="relative mb-8 rounded-xl cursor-pointer overflow-hidden shadow-lg group"
        >
          <div className="h-48 md:h-64 bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white">{heroCategory.name}</h3>
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {gridCategories.map((cat, idx) => (
          <div
            key={cat.id}
            onClick={() => navigate(`/category/${cat.id}`)}
            className={`relative h-32 rounded-xl cursor-pointer flex items-center justify-center text-white font-semibold text-lg shadow-md 
                bg-gradient-to-br ${gradientColors[idx % gradientColors.length]}
                transition-transform transform hover:scale-105 hover:shadow-lg`}
          >
            <span className="text-center px-3">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
