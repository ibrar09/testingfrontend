'use client';
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate for breadcrumbs
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { IoCartOutline } from "react-icons/io5"; // Icon for sticky bar

import { useCart } from "../../../../context/CartContext";
import { useLanguage } from "../../../../context/LanguageContext";
import api from "../../../../api/api";

import ProductImageGallery from "./ProductImageGallery";
import FeatureDetails from "./FeatureDetails";
import RelatedProducts from "./RelatedProducts";
import TabNavBar from "../description/TabNavbar";
import DescriptionContent from "../description/DescriptionContent";
import ReviewsSection from "../description/Reviews/ReviewsSection";
import { getRelatedProducts } from "./getRelatedProducts";

const ProductDetailsPage = () => {
  const { slug, id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // ------------------- Normalize Product (Logic unchanged) ------------------- //
  const normalizeProduct = (p) => {
    let images = [];
    if (Array.isArray(p.image_urls)) {
      images = p.image_urls;
    } else {
      try { images = JSON.parse(p.image_urls); } catch { images = []; }
    }
    if (!images.length) images = ["/placeholder.png"];

    const key_features = Array.isArray(p.key_features) ? p.key_features : (() => {
          try { return JSON.parse(p.key_features); } catch { return []; }
        })();

    const normalized = {
      ...p,
      images,
      key_features,
      key_features_ar: p.key_features_ar || key_features,
      category_name: p.category_name || "-",
      brand_name: p.brand_name || "Ram Limited",
      price: Number(p.price) || 0,
      stock: Number(p.stock) || 0,
      currency: p.currency || "SAR",
      details: p.details || p.ProductDetail || p.product_detail || {},
      name_display: isArabic ? p.name_ar || p.name : p.name,
      description_display: isArabic ? p.description_ar || p.description : p.description,
    };
    return normalized;
  };

  // ------------------- Fetch Product (Logic unchanged) ------------------- //
  useEffect(() => {
    const fetchProductAndRelated = async () => {
      try {
        const productIdentifier = slug || id;
        if (!productIdentifier) return;
        setLoading(true);
        let res;
        if (slug) res = await api.get(`/products/slug/${slug}`);
        else if (id) res = await api.get(`/products/${id}`);

        const raw = res.data?.data || res.data?.product || res.data;
        if (!raw) throw new Error("Product not found");

        const normalizedProduct = normalizeProduct(raw);
        setProduct(normalizedProduct);

        const allRes = await api.get("/products");
        const allProducts = allRes.data.data || [];
        const normalizedAll = allProducts.map(normalizeProduct);
        const related = getRelatedProducts(normalizedAll, normalizedProduct);
        setRelatedProducts(related);
      } catch (err) {
        toast.error(isArabic ? "فشل تحميل التفاصيل" : "Failed to load details");
      } finally {
        setLoading(false);
      }
    };
    fetchProductAndRelated();
  }, [slug, id, lang]);

  const handleAddToCart = () => {
    if (product.stock <= 0) return;
    addToCart(product);
    toast.success(`${product.name_display} ${isArabic ? "تمت الإضافة" : "added"} 🛒`, {
      style: { background: "#1e293b", color: "#fff" },
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-blue-600 font-bold">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-10 h-10 border-4 border-t-transparent border-blue-600 rounded-full" />
      </div>
    );
  }

  if (!product) return <div className="text-center py-20 text-red-500">{isArabic ? "المنتج غير موجود" : "Product not found."}</div>;

  const isOutOfStock = product.stock <= 0;

  // Generate SEO meta description from product description (truncated)
  const seoDescription = product.description_display 
    ? product.description_display.replace(/\n/g, ' ').substring(0, 160) 
    : (isArabic ? "شراء منتج عالي الجودة من Ram Limited. شحن سريع ودفع آمن." : "Buy high-quality product from Ram Limited. Fast shipping and secure payment.");
  
  // Generate canonical URL
  const canonicalUrl = `https://yourdomain.com/products/${slug || id}`;

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="bg-white min-h-screen relative overflow-x-hidden">
      <Helmet>
        {/* Title */}
        <title>{`${product.name_display} | ${product.brand_name}${product.category_name ? ` | ${product.category_name}` : ''}`}</title>
        
        {/* Meta Description */}
        <meta name="description" content={seoDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={product.name_display} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        {product.images && product.images.length > 0 && (
          <meta property="og:image" content={product.images[0]} />
        )}
        <meta property="og:site_name" content="Ram Limited" />
        <meta property="product:price:amount" content={product.price.toString()} />
        <meta property="product:price:currency" content={product.currency} />
        <meta property="product:availability" content={isOutOfStock ? "out of stock" : "in stock"} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name_display} />
        <meta name="twitter:description" content={seoDescription} />
        {product.images && product.images.length > 0 && (
          <meta name="twitter:image" content={product.images[0]} />
        )}
        
        {/* Language & Locale */}
        <meta httpEquiv="content-language" content={isArabic ? "ar" : "en"} />
        {isArabic && (
          <meta property="og:locale" content="ar_SA" />
        )}
        
        {/* Product Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name_display,
            "description": product.description_display ? product.description_display.replace(/\n/g, ' ').substring(0, 300) : "",
            "image": product.images && product.images.length > 0 ? product.images : [],
            "brand": {
              "@type": "Brand",
              "name": product.brand_name
            },
            "offers": {
              "@type": "Offer",
              "price": product.price,
              "priceCurrency": product.currency,
              "availability": isOutOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
              "url": canonicalUrl
            },
            "category": product.category_name,
            "sku": product.sku || product.id,
            "mpn": product.mpn || product.id
          })}
        </script>
      </Helmet>

      <Toaster position="top-right" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-12">
        
        {/* MOBILE ONLY: Title (Shows above image on small screens) */}
        <div className="lg:hidden mt-6 mb-2">
           <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1">{product.brand_name}</p>
           <h1 className="text-xl font-extrabold text-gray-900 leading-tight">
            {product.name_display}
          </h1>
        </div>

        {/* DESKTOP: Title (Hidden on mobile) */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden lg:block text-3xl font-black text-gray-900 mt-8 mb-6"
        >
          {product.name_display}
        </motion.h1>

        {/* Product Image + Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 py-4 lg:py-8 border-b border-gray-100">
          <div className="w-full">
            <ProductImageGallery images={product.images} productName={product.name_display} />
          </div>
          <div className="w-full">
            {/* Logic for AddToCart passed into FeatureDetails if needed, 
                or handled via sticky bar */}
            <FeatureDetails product={product} onAddToCart={handleAddToCart} />
          </div>
        </div>

        {/* Tabs & Content */}
        <div className="mt-8 lg:mt-12">
          <TabNavBar />
          <div className="mt-4">
            <DescriptionContent productId={product.id} product={product} />
            <div className="mt-12">
                <ReviewsSection productId={product.id} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section 
            className="mt-16 border-t border-gray-100 pt-12"
            aria-label={isArabic ? "منتجات ذات صلة" : "Related Products"}
          >
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-8">
                {isArabic ? "منتجات قد تعجبك" : "You Might Also Like"}
            </h2>
            <RelatedProducts related={relatedProducts} />
          </section>
        )}
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <AnimatePresence>
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 z-[60] flex items-center justify-between gap-4 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]"
        >
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                {isArabic ? "السعر الإجمالي" : "Total Price"}
            </span>
            <span className="text-xl font-black text-blue-900 leading-none">
              {product.price} <small className="text-[10px]">{product.currency}</small>
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`flex-grow h-12 rounded-xl font-bold flex items-center justify-center gap-2 text-white transition-transform active:scale-95 ${
              isOutOfStock 
              ? "bg-gray-300" 
              : "bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg shadow-blue-200"
            }`}
          >
            <IoCartOutline size={20} />
            {isOutOfStock ? (isArabic ? "غير متوفر" : "Out of Stock") : (isArabic ? "أضف للسلة" : "Add to Cart")}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductDetailsPage;