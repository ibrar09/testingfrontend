// src/pages/MaajShop/components/ProductDetails/AttributesContent.jsx
import React from "react";

// Example static data — replace later with backend data
const attributeData = [
  { attribute: "Material", value: "Metal", attribute2: "Type", value2: "3D embossed logo" },
  { attribute: "Application", value: "Garment, Shoes, Bags", attribute2: "Label Type", value2: "Clothing Label" },
  { attribute: "Shape", value: "Round, Oval, Square, Rectangle", attribute2: "Feature", value2: "Washable" },
  { attribute: "Printing", value: "Silk Screen Printing", attribute2: "Fold type", value2: "Straight cut" },
  { attribute: "EDGE", value: "Laser Cut", attribute2: "Technics", value2: "Embossed" },
  { attribute: "Sample Lead Time", value: "7 days", attribute2: "Model Number", value2: "CSY009" },
  { attribute: "Place of Origin", value: "Zhejiang, China", attribute2: "Brand Name", value2: "Desong" },
  { attribute: "Pattern", value: "Rectangle, Square, Circular, Elliptical", attribute2: "Product name", value2: "Custom Metal Label" },
  { attribute: "Material Type", value: "Zinc Alloy", attribute2: "Color", value2: "Customized Colors" },
  { attribute: "MOQ", value: "500 pcs", attribute2: "Logo", value2: "Customer Logo" },
  { attribute: "Technical", value: "Plating", attribute2: "OEM/ODM", value2: "Welcome" },
  { attribute: "Model Cost", value: "$56", attribute2: "Use", value2: "Garment, Shoes, Bag, Suitcase Accessories" },
  { attribute: "Payment", value: "PayPal, Western Union, TT, Trade Assurance", attribute2: "", value2: "" },
];

const AttributesContent = () => {
  // Helper to render individual attribute cell
  const renderCell = (label, value) => (
    <>
      <div className="p-3 border-b border-r border-gray-200 font-medium text-gray-800 bg-gray-50">
        {label}
      </div>
      <div className="p-3 border-b border-gray-200 text-gray-700">{value}</div>
    </>
  );

  return (
    <section id="attributes" className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
        Key Attributes
      </h2>

      {/* Responsive attribute table */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-200 rounded-lg overflow-hidden">
        {attributeData.map((row, index) => (
          <React.Fragment key={index}>
            {renderCell(row.attribute, row.value)}
            {row.attribute2 && row.value2
              ? renderCell(row.attribute2, row.value2)
              : (
                // Fill remaining space on large screens
                <div className="hidden md:block col-span-2 border-b border-gray-200"></div>
              )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AttributesContent;
