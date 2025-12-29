import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { FiClock } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";

import { BACKEND_URL } from "../../../api/config";

const NewArrivalsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNewArrivals = useCallback(async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/v1/products`);
      const data = res.data.data || res.data;

      // Filter for new releases (client-side since backend doesn't have filter yet)
      const newArrivals = data
        .filter(p => p.is_new_release === true)
        .map(p => ({
          ...p,
          price: Number(p.price) || 0,
          oldprice: Number(p.oldprice) || 0,
          createdAt: p.createdAt || p.created_at || new Date().toISOString()
        }))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setProducts(newArrivals);
    } catch (error) {
      console.error("Error fetching new arrivals:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNewArrivals();
  }, [fetchNewArrivals]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500 text-white rounded-xl">
                <FiClock className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">New Arrivals</h1>
                <p className="text-gray-600 mt-2">Fresh products just added to our collection</p>
              </div>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <IoArrowBack className="w-5 h-5" />
              Back to Home
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-6">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-sm text-gray-500">Total Products</span>
              <p className="text-xl font-bold">{products.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-600">Loading new arrivals...</p>
          </div>
        ) : products.length > 0 ? (
          <ProductGrid
            showFilters={true}
            title=""
            showTitle={false}
          />
        ) : (
          <div className="text-center py-20 bg-white rounded-xl">
            <FiClock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No new arrivals yet</h3>
            <p className="text-gray-500 mb-6">Check back soon for new products</p>
            <Link
              to="/shop"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-block"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrivalsPage;