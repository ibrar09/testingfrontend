// SearchResultsPage.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./components/ProductCard"; 
import api from "../../api/api";  // ✅ Use your centralized API instance

const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        // ✅ Using api instead of axios + no hardcoded URL
        const res = await api.get("/products/search", {
          params: { query: searchQuery },
        });

        setProducts(res.data.data || []);
      } catch (err) {
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  return (
    <div className="p-5 md:p-10">
      <h2 className="text-2xl font-bold mb-5">
        Search results for "{searchQuery}"
      </h2>

      {loading && <p>Loading...</p>}

      {!loading && products.length === 0 && (
        <p>No products found for "{searchQuery}".</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
