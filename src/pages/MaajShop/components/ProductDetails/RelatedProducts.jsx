import React, { useState, useMemo } from "react";
import ProductCard from "../ProductCard";
import { useLanguage } from "../../../../context/LanguageContext";
import { BACKEND_URL } from "../../../../api/api";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";

// ✅ Keeping your working image logic
const normalizeImage = (img) => {
  if (!img) return "/placeholder.png";
  if (typeof img === "object" && img.image_url) img = img.image_url;
  if (img.startsWith("http")) return img;
  return `${BACKEND_URL.replace(/\/$/, "")}/${img.replace(/^\/+/, "")}`;
};

const RelatedProducts = ({ related = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const sliceCount = 5; 

  const normalizedProducts = useMemo(() => {
    const visible = showAll ? related : related.slice(0, sliceCount);
    
    return visible.map((p) => {
      // ✅ FIX: Map names to 'display_name' (What your ProductCard uses)
      const name = isArabic 
        ? (p.name_ar || p.name_display_ar || p.name || p.name_display) 
        : (p.name_en || p.name_display_en || p.name || p.name_display);

      // ✅ FIX: Map description to 'display_description'
      const description = isArabic
        ? (p.description_ar || p.display_description_ar || p.description)
        : (p.description_en || p.display_description_en || p.description);

      return {
        ...p,
        // ✅ Crucial: ProductCard expects 'display_name'
        display_name: name, 
        display_description: description,
        // Keeping your working image mapping
        images: Array.isArray(p.image_urls) && p.image_urls.length
          ? p.image_urls.map(normalizeImage)
          : (p.image_url ? [normalizeImage(p.image_url)] : ["/placeholder.png"]),
      };
    });
  }, [related, showAll, isArabic]);

  if (!related || related.length === 0) return null;

  return (
    <section 
      dir={isArabic ? "rtl" : "ltr"} 
      className="mt-20 mb-10 px-2"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-label={isArabic ? "منتجات ذات صلة" : "Related Products"}
    >
      {/* Structured Data for Product List */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": isArabic ? "منتجات ذات صلة" : "Related Products",
          "description": isArabic ? "منتجات مشابهة قد تعجبك" : "Similar products you might like",
          "numberOfItems": normalizedProducts.length,
          "itemListElement": normalizedProducts.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Product",
              "name": product.display_name || product.name,
              "url": window.location.origin + `/products/${product.slug || product.id}`,
              "image": product.images && product.images.length > 0 ? product.images[0] : "",
              "offers": {
                "@type": "Offer",
                "price": product.price || 0,
                "priceCurrency": product.currency || "SAR"
              }
            }
          }))
        })}
      </script>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
          <h2 
            className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight"
            itemProp="name"
          >
            {isArabic ? "منتجات قد تعجبك" : "Products You May Like"}
          </h2>
        </div>
      </div>

      <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6"
        role="list"
        aria-label={isArabic ? "قائمة المنتجات ذات الصلة" : "Related products list"}
      >
        <AnimatePresence mode="popLayout">
          {normalizedProducts.map((product, idx) => (
            <motion.div
              layout
              key={product.id || idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: idx * 0.05 }}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              role="listitem"
            >
              <div 
                className="h-full bg-white rounded-[1.5rem] border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                itemProp="item"
                itemScope
                itemType="https://schema.org/Product"
              >
                {/* Hidden meta for structured data */}
                <meta itemProp="position" content={idx + 1} />
                {/* ProductCard will now find 'display_name' inside the product object */}
                <ProductCard product={product} small={true} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {related.length > sliceCount && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="group flex items-center gap-3 px-8 py-3 bg-gray-900 text-white rounded-2xl font-black text-sm transition-all hover:bg-blue-600"
            aria-expanded={showAll}
            aria-label={showAll 
              ? (isArabic ? "تقليل عرض المنتجات" : "Show fewer products") 
              : (isArabic ? "عرض جميع المنتجات ذات الصلة" : "Show all related products")
            }
          >
            {showAll ? (isArabic ? "عرض أقل" : "Show Less") : (isArabic ? "عرض الكل" : "View All Collection")}
            <span className={showAll ? 'rotate-180 transition-transform' : ''}>
               {isArabic ? <IoArrowBackOutline size={18}/> : <IoArrowForwardOutline size={18} />}
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default RelatedProducts;