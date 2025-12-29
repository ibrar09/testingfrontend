// src/pages/MaajShop/components/ProductDetails/ProductVariants.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductVariants = ({ variants = [], productName = "Product" }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle empty variants safely
  if (!variants || variants.length === 0) {
    return (
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Available Options</h3>
        <p className="text-sm text-gray-500">No variants available.</p>
      </div>
    );
  }

  const selectedVariant = variants[selectedIndex];

  return (
    <div className="mb-8">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-3">Available Options</h3>

      {/* Variant Buttons */}
      <div className="flex gap-3 flex-wrap" role="radiogroup" aria-label={`${productName} variants`}>
        {variants.map((variant, index) => {
          const isActive = selectedIndex === index;

          return (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`
                px-4 py-2 rounded-lg border transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                ${isActive 
                  ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm scale-[1.03]" 
                  : "border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50"
                }
              `}
              aria-pressed={isActive}
              aria-label={`Select variant ${variant.name}`}
            >
              {variant.name}
            </button>
          );
        })}
      </div>

      {/* Selected Variant Details */}
      <div className="mt-3 text-sm text-gray-600">
        Selected:{" "}
        <span className="font-medium text-gray-800">{selectedVariant.name}</span>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: productName,
          offers: variants.map((v) => ({
            "@type": "Offer",
            name: v.name,
            price: v.price || 0,
            priceCurrency: v.currency || "SAR",
            availability: v.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          })),
        })}
      </script>
    </div>
  );
};

ProductVariants.propTypes = {
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number,
      currency: PropTypes.string,
      stock: PropTypes.number,
    })
  ),
  productName: PropTypes.string,
};

export default ProductVariants;
