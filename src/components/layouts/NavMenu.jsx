'use client';

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { API_BASE_URL } from "../../api/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function NavMenu({ onClose }) {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [loading, setLoading] = useState(true);
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const isArabic = lang === "ar";

  useEffect(() => {
    const fetchCategories = async () => {
      try {


        // ... inside component
        const { data } = await axios.get(`${API_BASE_URL}/menu`);
        setCategories(data || []);
        if (data.length > 0) setActiveTab(data[0].id);
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    fetchCategories();
  }, []);

  if (loading) return <div className="p-10 text-center text-gray-400">Loading Categories...</div>;

  return (
    <div className="bg-white w-full max-w-7xl mx-auto overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex h-[450px]">
        <div className="w-1/4 bg-gray-50 border-r border-l overflow-y-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveTab(cat.id)}
              onClick={() => { navigate(`/category/${cat.id}`); onClose(); }}
              className={`w-full flex items-center justify-between px-6 py-4 text-sm font-bold transition-all ${activeTab === cat.id ? "bg-white text-blue-600 border-r-4 border-blue-600 shadow-sm" : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {isArabic ? cat.category_ar || cat.category : cat.category}
              <ChevronRight size={16} className={isArabic ? "rotate-180" : ""} />
            </button>
          ))}
        </div>

        <div className="w-3/4 p-8 overflow-y-auto bg-white">
          <AnimatePresence mode="wait">
            {activeTab && (
              <motion.div key={activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="grid grid-cols-3 gap-10">
                {categories.find(c => c.id === activeTab)?.subcategories?.map((sub) => (
                  <div key={sub.id} className="space-y-4">
                    <h4 onClick={() => { navigate(`/subcategory/${sub.id}`); onClose(); }} className="font-bold text-gray-900 border-b pb-2 cursor-pointer hover:text-blue-600 transition-colors">
                      {isArabic ? sub.name_ar || sub.name : sub.name}
                    </h4>
                    <ul className="space-y-2">
                      {sub.products?.slice(0, 5).map((p) => (
                        <li key={p.id}>
                          <button onClick={() => { navigate(`/product/${p.id}`); onClose(); }} className="text-sm text-gray-500 hover:text-blue-600 transition-all text-left">
                            {isArabic ? p.name_ar || p.name : p.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden max-h-[60vh] overflow-y-auto">
        {categories.map((cat) => (
          <div key={cat.id} className="border-b">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === cat.id ? null : cat.id)}
              className="w-full flex items-center justify-between p-4 font-bold text-gray-700"
            >
              {isArabic ? cat.category_ar || cat.category : cat.category}
              <ChevronDown size={18} className={mobileExpanded === cat.id ? "rotate-180" : ""} />
            </button>
            {mobileExpanded === cat.id && (
              <div className="bg-gray-50 p-4">
                {cat.subcategories?.map(sub => (
                  <div key={sub.id} className="mb-4">
                    <div onClick={() => { navigate(`/subcategory/${sub.id}`); onClose(); }} className="font-bold text-blue-600 mb-2">{isArabic ? sub.name_ar || sub.name : sub.name}</div>
                    <div className="grid grid-cols-1 gap-1">
                      {sub.products?.slice(0, 3).map(p => (
                        <button key={p.id} onClick={() => { navigate(`/product/${p.id}`); onClose(); }} className="text-sm text-gray-500 text-left py-1">
                          • {isArabic ? p.name_ar || p.name : p.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}