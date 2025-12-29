import React from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { IoInformationCircleOutline, IoDocumentTextOutline } from "react-icons/io5";

const DescriptionPage = ({ product }) => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  if (!product) return null;

  // Helper to render text with line breaks correctly
  const renderText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const descriptionDisplay = isArabic ? product.description_ar || product.description : product.description;
  const aboutDisplay = isArabic ? product.aboutText_ar || product.aboutText : product.aboutText;

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-gray-50 py-6 sm:py-12 min-h-[300px]"
    >
      {/* JSON-LD Structured Data for Product Description - Hidden from UI */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name || "",
          "description": descriptionDisplay ? descriptionDisplay.replace(/\n/g, ' ').substring(0, 300) : "",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": typeof window !== 'undefined' ? window.location.href : ""
          }
        })}
      </script>

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Main Container */}
        <article 
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          itemScope 
          itemType="https://schema.org/Product"
        >
          
          {/* DESCRIPTION SECTION */}
          {descriptionDisplay && (
            <section className="p-6 sm:p-8 border-b border-gray-100" itemProp="description">
              <div className="flex items-center gap-2 mb-4">
                <IoDocumentTextOutline className="text-blue-600 w-6 h-6" />
                <h1 className="text-xl font-bold text-gray-900">
                  {isArabic ? "وصف المنتج" : "Product Description"}
                </h1>
              </div>
              <div className="text-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {renderText(descriptionDisplay)}
              </div>
            </section>
          )}

          {/* ABOUT PRODUCT SECTION */}
          {aboutDisplay && (
            <section className="p-6 sm:p-8 bg-blue-50/30">
              <div className="flex items-center gap-2 mb-4">
                <IoInformationCircleOutline className="text-blue-600 w-6 h-6" />
                <h2 className="text-xl font-bold text-gray-900">
                  {isArabic ? "حول هذا المنتج" : "About This Product"}
                </h2>
              </div>
              <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {renderText(aboutDisplay)}
              </div>
            </section>
          )}

          {/* NO DATA STATE */}
          {!descriptionDisplay && !aboutDisplay && (
            <div className="p-12 text-center text-gray-400">
              {isArabic ? "لا يوجد وصف متاح لهذا المنتج" : "No description available for this product."}
            </div>
          )}
        </article>

        {/* TRUST BADGES (Optional but looks great) */}
        <div 
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
          role="list"
          aria-label={isArabic ? "مزايا التسوق" : "Shopping benefits"}
        >
          <div className="p-3" role="listitem">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {isArabic ? "أصلي 100%" : "100% Authentic"}
            </p>
          </div>
          <div className="p-3" role="listitem">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {isArabic ? "ضمان الجودة" : "Quality Assured"}
            </p>
          </div>
          <div className="p-3" role="listitem">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {isArabic ? "توصيل سريع" : "Fast Shipping"}
            </p>
          </div>
          <div className="p-3" role="listitem">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {isArabic ? "دفع آمن" : "Secure Payment"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;