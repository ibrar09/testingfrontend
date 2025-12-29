'use client';
import React, { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline, IoCartOutline } from "react-icons/io5";
import { Star } from "@mui/icons-material";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { BACKEND_URL } from "../../../api/api";
import { useLanguage } from "../../../context/LanguageContext";

const normalizeImage = (img) => {
  if (!img) return "/placeholder.png";
  const raw = typeof img === "string" ? img : img.image_url || img;
  if (!raw) return "/placeholder.png";
  if (raw.startsWith("http")) return raw;
  return `${BACKEND_URL}/uploads/products/${raw.replace(/^\/+/, "")}`;
};

const ProductCard = ({ product, autoSlideInterval = 2000 }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { lang } = useLanguage();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);

  const safeProduct = product || {};
  const images = Array.isArray(safeProduct.images) && safeProduct.images.length
      ? safeProduct.images.map(normalizeImage)
      : ["/placeholder.png"];
  
  const currentImage = images[currentImageIndex];
  const price = Number(safeProduct.price) || 0;
  const oldPrice = Number(safeProduct.oldprice) || 0;
  const stockQty = Number(safeProduct.stock) || 0;
  const isOutOfStock = stockQty <= 0;

  const handleViewDetails = (e) => {
    e.stopPropagation();
    const slug = product?.slug || product?.id;
    if (slug) navigate(`/product/${slug}`, { state: { product } });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isOutOfStock) return;
    setAdding(true);
    addToCart({
      id: safeProduct.id,
      title: safeProduct.display_name,
      price: price,
      quantity: 1,
      images: images,
      variant_id: safeProduct.variant_id || null,
      inStock: !isOutOfStock,
      stockAmount: stockQty,
    });
    setTimeout(() => setAdding(false), 500);
  };

  return (
    <div
      onClick={handleViewDetails}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col h-full transition-all hover:shadow-md cursor-pointer overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* IMAGE SECTION - Square aspect ratio for mobile grid */}
      <div className="relative aspect-square w-full bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          loading="lazy"
          src={currentImage}
          alt={safeProduct.display_name}
          className="object-contain w-full h-full p-2"
        />
        
        {/* Badges - Smaller on mobile */}
        <div className="absolute top-1 left-1 flex flex-col gap-1 z-10 scale-75 origin-top-left">
          {safeProduct.is_hot_deal && <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">HOT</span>}
          {safeProduct.is_best_seller && <span className="bg-yellow-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">BEST</span>}
        </div>

        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center text-red-600 font-bold text-sm z-10">
            {lang === "ar" ? "انتهى" : "Sold Out"}
          </div>
        )}
      </div>

      {/* INFO SECTION */}
      <div className="flex flex-col flex-1 p-2 sm:p-4 gap-1">
        {/* Brand/Category & Rating */}
        <div className="flex items-center justify-between gap-1">
          <span className="text-[10px] sm:text-xs text-gray-500 truncate">{safeProduct.brand_name || safeProduct.category_name}</span>
          <div className="flex items-center text-yellow-500">
            <Star className="!w-3 !h-3 sm:!w-4 sm:!h-4" />
            <span className="text-[10px] sm:text-sm text-gray-600 ml-0.5">{safeProduct.rating}</span>
          </div>
        </div>

        {/* Title - Important for Amazon Grid */}
        <h3 className="text-xs sm:text-base font-medium text-gray-900 line-clamp-2 leading-tight min-h-[2.5em]">
          {safeProduct.display_name}
        </h3>

        {/* Description - HIDDEN ON MOBILE to save space like Amazon */}
        <p className="hidden sm:line-clamp-2 text-gray-500 text-xs mt-1">
          {safeProduct.display_description}
        </p>

        {/* Pricing */}
        <div className="mt-auto pt-2">
          <div className="flex flex-wrap items-baseline gap-1">
            <span className="text-sm sm:text-xl font-bold text-gray-900">
              {price.toFixed(2)} <span className="text-[10px] sm:text-xs font-normal">{safeProduct.currency}</span>
            </span>
            {oldPrice > price && (
              <span className="line-through text-gray-400 text-[10px] sm:text-sm">
                {oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Stock Info */}
          <p className={clsx("text-[10px] sm:text-xs font-medium", isOutOfStock ? "text-red-500" : "text-green-600")}>
            {isOutOfStock ? (lang === "ar" ? "نفد" : "Out of Stock") : (lang === "ar" ? "متوفر" : "In Stock")}
          </p>
        </div>

        {/* Action Buttons - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row gap-1.5 mt-2">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock || adding}
          className={clsx(
  "w-full py-1.5 sm:py-2 rounded flex items-center justify-center gap-1 text-[11px] sm:text-sm font-bold transition-all",
  isOutOfStock
    ? "bg-gray-100 text-gray-400"
    : "bg-gradient-to-b from-[#023A9A] to-[#1392E0] hover:from-[#1392E0] hover:to-[#023A9A] text-white"
)}

          >
            <IoCartOutline className="w-3 h-3 sm:w-4 sm:h-4" />
            {adding ? "..." : (lang === "ar" ? "أضف" : "Add")}
          </button>
          <button
            onClick={handleViewDetails}
            className="hidden sm:flex w-full py-2 rounded border border-gray-300 text-gray-700 text-sm font-semibold justify-center hover:bg-gray-50"
          >
            {lang === "ar" ? "تفاصيل" : "Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;