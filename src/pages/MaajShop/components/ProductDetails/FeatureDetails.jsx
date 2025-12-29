import React, { useState } from "react";
import {
  IoStarSharp,
  IoHeartOutline,
  IoShareSocialOutline,
  IoCartOutline,
  IoAddOutline,
  IoRemoveOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import ProductVariants from "./ProductVariants";
import { useCart } from "../../../../context/CartContext";
import { useLanguage } from "../../../../context/LanguageContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const FeatureDetails = ({ product }) => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const {
    name_display,
    description_display,
    category_name,
    price,
    oldprice,
    stock,
    currency = "SAR",
    key_features = [],
    key_features_ar = [],
    variants = [],
  } = product;

  /* ---------- Logic Helpers ---------- */
  const parseArray = (value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
      } catch { return []; }
    }
    return [];
  };

  const features = isArabic
    ? parseArray(key_features_ar).length > 0 ? parseArray(key_features_ar) : parseArray(key_features)
    : parseArray(key_features);

  const normalizedStock = Number(stock) || 0;
  const inStock = normalizedStock > 0;
  const percentOff = oldprice && price ? Math.round(((oldprice - price) / oldprice) * 100) : 0;

  const handleQuantityChange = (delta) => {
    if (!inStock) return;
    const maxQty = normalizedStock || 99;
    setQuantity((prev) => Math.min(Math.max(prev + delta, 1), maxQty));
  };

  const handleAddToCart = () => {
    if (!inStock) {
      toast.error(isArabic ? "المنتج غير متوفر" : "Out of stock");
      return;
    }
    addToCart({ ...product, quantity });
    toast.success(
      isArabic
        ? `تمت إضافة ${quantity} × ${name_display} إلى السلة`
        : `${quantity} × ${name_display} added to cart 🛒`,
      { style: { background: "#1e293b", color: "#fff", borderRadius: "12px" } }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex flex-col gap-6 w-full max-w-2xl ${isArabic ? "text-right" : "text-left"}`}
    >
      {/* Category & Badge */}
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest border border-blue-100">
          {category_name || (isArabic ? "عام" : "General")}
        </span>
        {inStock && (
          <span className="flex items-center gap-1 text-green-600 text-[10px] font-bold uppercase">
            <IoCheckmarkCircleOutline size={14} />
            {isArabic ? "متوفر الآن" : "In Stock"}
          </span>
        )}
      </div>

      {/* Title & Rating */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
          {name_display}
        </h1>
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <IoStarSharp key={i} className={i < 4 ? "fill-current" : "opacity-30"} />
            ))}
          </div>
          <span className="text-xs font-bold text-gray-400 mt-0.5">
            4.8 (124 {isArabic ? "تقييم" : "reviews"})
          </span>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm inline-flex flex-col items-start gap-1">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-blue-900">
            {price} <small className="text-sm font-medium">{currency}</small>
          </span>
          {oldprice && (
            <span className="text-lg text-gray-400 line-through decoration-red-400/50">
              {oldprice}
            </span>
          )}
        </div>
        {oldprice && (
          <span className="text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded-md uppercase tracking-tighter">
            {isArabic ? "وفر" : "Save"} {percentOff}%
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg">
        {description_display}
      </p>

      {/* Variants (Logic from your separate component) */}
      {variants.length > 0 && (
        <div className="py-2">
          <ProductVariants variants={variants} />
        </div>
      )}

      {/* Quantity & Actions Row */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        {/* Modern Quantity Selector */}
        <div className="flex items-center justify-between w-full sm:w-32 h-14 bg-gray-100 rounded-xl px-2 border border-transparent focus-within:border-blue-200 transition-all">
          <button
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1 || !inStock}
            className="p-2 text-gray-500 hover:text-blue-600 disabled:opacity-30 transition-colors"
          >
            <IoRemoveOutline size={20} />
          </button>
          <span className="font-black text-gray-800 text-lg">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            disabled={!inStock || quantity >= normalizedStock}
            className="p-2 text-gray-500 hover:text-blue-600 disabled:opacity-30 transition-colors"
          >
            <IoAddOutline size={20} />
          </button>
        </div>

        {/* Main Buttons */}
        <div className="flex items-center gap-2 w-full">
          <button
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`flex-grow h-14 flex items-center justify-center gap-3 rounded-xl font-black text-white transition-all active:scale-95 shadow-lg shadow-blue-200 ${
              inStock 
              ? "bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-blue-300" 
              : "bg-gray-300 shadow-none cursor-not-allowed"
            }`}
          >
            <IoCartOutline size={22} />
            {isArabic ? "إضافة إلى السلة" : "Add to Cart"}
          </button>

          <button 
             onClick={() => toast.success(isArabic ? "تم الحفظ" : "Saved")}
             className="h-14 w-14 flex items-center justify-center rounded-xl border-2 border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 transition-all"
          >
            <IoHeartOutline size={24} />
          </button>
          
          <button className="hidden sm:flex h-14 w-14 items-center justify-center rounded-xl border-2 border-gray-100 text-gray-400 hover:text-blue-500 hover:border-blue-100 transition-all">
            <IoShareSocialOutline size={22} />
          </button>
        </div>
      </div>

      {/* Key Features List */}
      {features.length > 0 && (
        <div className="mt-4 pt-6 border-t border-gray-50">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
            {isArabic ? "المواصفات الأساسية" : "Technical Features"}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-[13px] font-medium text-gray-600 bg-blue-50/50 p-3 rounded-xl border border-blue-50/20"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {f}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default FeatureDetails;