import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import api from "../../api/api"; // ✅ use global API instance

const FeaturedProducts = ({ title, filter }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await api.get("/products"); // ✅ clean URL
        const data = res.data?.products || [];

        let filtered = [];

        if (filter === "hot") {
          filtered = data.filter((p) => p.is_hot_deal);
        } else if (filter === "best_seller") {
          filtered = data.filter((p) => p.is_best_seller);
        } else {
          filtered = data;
        }

        setProducts(filtered.slice(0, 8)); // limit to 8
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, [filter]);

  return (
    <section className="px-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
