'use client';
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLanguage } from "../../../context/LanguageContext";
import api, { BACKEND_URL } from "../../../api/api";

const normalizeImage = (img) => {
  if (!img) return "/placeholder.png";
  const raw = typeof img === "string" ? img : img.image_url || img;
  if (!raw) return "/placeholder.png";
  if (raw.startsWith("http")) return raw;
  return `${BACKEND_URL}${raw.startsWith("/") ? "" : "/"}${raw}`;
};

const ProductGrid = ({ gridBgColor }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/products");
      const data = res.data?.data || res.data || [];

      const mappedProducts = data.map((p) => ({
        ...p,
        images: Array.isArray(p.image_urls) && p.image_urls.length
            ? p.image_urls.map((img) => normalizeImage(img))
            : ["/placeholder.png"],
        category_name: p.category?.name || "-",
        display_name: isArabic && p.name_ar ? p.name_ar : p.name,
        display_description: isArabic && p.description_ar ? p.description_ar : p.description,
      }));

      // Sort: In stock first
      mappedProducts.sort((a, b) => (a.in_stock === b.in_stock ? 0 : a.in_stock ? -1 : 1));
      setProducts(mappedProducts);
    } catch (err) {
      console.error("[ProductGrid] Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [lang]);

  if (loading) return <div className="text-center py-20">{isArabic ? "جاري التحميل..." : "Loading..."}</div>;

  // Generate ItemList structured data for product grid
  const generateProductGridSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": isArabic ? "منتجات المتجر" : "Store Products",
      "description": isArabic 
        ? "مجموعة منتجات أجهزة التكييف والتبريد في متجر رام المحدودة بالسعودية"
        : "Collection of air conditioning and cooling products at Ram Limited store in Saudi Arabia",
      "numberOfItems": products.length,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.display_name || product.name,
          "description": product.display_description || product.description || "",
          "image": product.images && product.images.length > 0 ? product.images[0] : "",
          "sku": product.sku || product.id,
          "brand": {
            "@type": "Brand",
            "name": product.brand_name || "Ram Limited"
          },
          "offers": {
            "@type": "Offer",
            "price": product.price || 0,
            "priceCurrency": product.currency || "SAR",
            "availability": product.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
          },
          "category": product.category_name
        }
      }))
    };
  };

  return (
    <section 
      className="p-3 sm:p-6" 
      style={{ backgroundColor: gridBgColor }}
      dir={isArabic ? "rtl" : "ltr"}
      itemScope
      itemType="https://schema.org/ItemList"
      aria-label={isArabic ? "قائمة المنتجات" : "Products List"}
    >
      {/* Structured Data for Search Engines */}
      <script type="application/ld+json">
        {JSON.stringify(generateProductGridSchema())}
      </script>

      <h1 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-gray-800">
        {isArabic ? "منتجاتنا المختارة" : "Featured Products"}
      </h1>

      {/* THE AMAZON-STYLE GRID:
         - grid-cols-2: Exactly 2 items per row on mobile screens.
         - sm:grid-cols-3...: Scales up for tablet and desktop.
         - gap-2 on mobile, gap-6 on desktop.
      */}
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-6"
        role="list"
        aria-label={isArabic ? "بطاقات المنتجات" : "Product Cards"}
      >
        {products.map((p, index) => (
          <div 
            key={p.id} 
            role="listitem"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {/* Hidden meta for structured data position */}
            <meta itemProp="position" content={index + 1} />
            <ProductCard product={p} />
          </div>
        ))}
      </div>
      
      {/* SEO Footer with Saudi-specific information */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 mb-2">
          {isArabic 
            ? "📞 للاستفسارات: +966-XXXXXXXXXX | 🚚 شحن مجاني داخل الرياض | ✅ ضمان لمدة عام"
            : "📞 Inquiries: +966-XXXXXXXXXX | 🚚 Free shipping within Riyadh | ✅ 1-year warranty"
          }
        </p>
        <p className="text-xs text-gray-500">
          {isArabic
            ? "متخصصون في بيع وتركيب وصيانة أجهزة التكييف في السعودية منذ 2023"
            : "Specialists in AC unit sales, installation, and maintenance in Saudi Arabia since 2023"
          }
        </p>
      </div>
    </section>
  );
};

export default ProductGrid;